"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  ThumbsUp, 
  Share, 
  Heart, 
  Video, 
  Maximize, 
  Home,
  Building, 
  Clock, 
  ChevronLeft, 
  ChevronRight,
  MapPin
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function PropertyHero() {
  const { property } = useProperty();
  const [isVideoMode, setIsVideoMode] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  
  return (
    <section className="relative w-full" aria-labelledby="property-title">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-10" />
      
      {isVideoMode ? (
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <video 
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
              controls
            >
              <source src="/video-placeholder.mp4\" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ) : (
        <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
          <Image
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
            alt="Property exterior view"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 right-4 flex gap-2 z-20">
            <Button size="sm" variant="secondary" className="rounded-full opacity-80">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="secondary" className="rounded-full opacity-80">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      
      <div className="absolute top-4 right-4 flex gap-2 z-20">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full opacity-80 backdrop-blur-sm"
            onClick={() => setIsVideoMode(!isVideoMode)}
            aria-label={isVideoMode ? "Switch to image view" : "Switch to video view"}
          >
            {isVideoMode ? <Home className="h-4 w-4" /> : <Video className="h-4 w-4" />}
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            size="icon" 
            variant="secondary" 
            className="rounded-full opacity-80 backdrop-blur-sm"
            aria-label="View fullscreen"
          >
            <Maximize className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="relative -mt-24 bg-background/95 backdrop-blur-sm rounded-t-xl shadow-lg p-6 z-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge variant="outline" className="bg-secondary/50">For Sale</Badge>
                <Badge variant="outline" className="bg-secondary/50">Apartment</Badge>
                <Badge variant="outline" className="bg-secondary/50">Residential</Badge>
              </div>
              
              <h1 id="property-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {property.title}
              </h1>
              
              <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{property.location.address}, {property.location.city}</span>
              </div>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="text-3xl font-bold text-foreground">₹ {property.price}</div>
              <div className="text-sm text-muted-foreground">₹ {property.pricePerSqFt} per sq.ft</div>
              
              <div className="flex items-center gap-2 mt-2">
                <Building className="h-4 w-4" />
                <span>{property.builtUpArea} sq.ft</span>
                <Clock className="h-4 w-4 ml-2" />
                <span>{property.possessionStatus}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <Button className="bg-primary text-primary-foreground">
              <Phone className="mr-2 h-4 w-4" />
              Contact Owner
            </Button>
            <Button variant="outline">
              <ThumbsUp className="mr-2 h-4 w-4" />
              Show Interest
            </Button>
            <Button 
              variant="outline" 
              className={cn(isFavorite && "text-destructive border-destructive")}
              onClick={toggleFavorite}
              aria-pressed={isFavorite}
            >
              <Heart className={cn("mr-2 h-4 w-4", isFavorite && "fill-destructive")} />
              {isFavorite ? "Saved" : "Save"}
            </Button>
            <Button variant="outline">
              <Share className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}