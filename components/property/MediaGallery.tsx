"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  X, 
  Image as ImageIcon 
} from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function MediaGallery() {
  const { property } = useProperty();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };
  
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    );
  };
  
  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setViewerOpen(true);
  };
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Photos & Videos</h2>

      <Carousel className="w-full max-w-xl mx-auto mb-6"> {/* Adjusted max-width and added margin-bottom */}
        <CarouselContent>
          {property.images.map((imageSrc, index) => (
            <CarouselItem key={index} onClick={() => openViewer(index)} className="cursor-pointer">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0 overflow-hidden rounded-lg"> {/* Added rounded-lg here */}
                    <Image
                      src={imageSrc}
                      alt={`Property image ${index + 1}`}
                      width={1280} // Adjusted width for better default quality in carousel
                      height={720} // Adjusted height for 16:9 aspect ratio
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-4 md:ml-8" /> {/* Responsive margin */}
        <CarouselNext className="mr-4 md:mr-8" /> {/* Responsive margin */}
      </Carousel>
      
      {/* Button to open viewer for all photos can be kept if desired, or removed if carousel is primary */}
      {/* For now, I'll keep it but it will open the first image in the modal */}
      <Button 
        variant="outline" 
        className="mt-4 w-full md:w-auto" // Adjusted width for different screen sizes
        onClick={() => openViewer(0)}
      >
        <Maximize className="mr-2 h-4 w-4" /> {/* Changed icon to Maximize for "View Larger" implication */}
        View in Fullscreen
      </Button>
      
      <Dialog open={viewerOpen} onOpenChange={setViewerOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-none">
          <div className="relative h-[80vh] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="relative w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={property.images[currentIndex]}
                  alt={`Property view ${currentIndex + 1}`}
                  layout="fill"
                  objectFit="contain"
                />
              </motion.div>
            </AnimatePresence>
            
            <Button 
              size="icon"
              variant="ghost" 
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setViewerOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            <Button 
              size="icon"
              variant="ghost" 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 rounded-full z-10"
              onClick={prevImage}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button 
              size="icon"
              variant="ghost" 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 h-12 w-12 rounded-full z-10"
              onClick={nextImage}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === index ? "bg-white w-4" : "bg-white/50"
                  )}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
}