"use client";

import React, { useState, useEffect, memo } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ThumbsUp, 
  Heart, 
  Gauge, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  ChevronLeft, 
  ChevronRight, 
  TrendingUp 
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function TrendingListings() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getItemsToShow = () => {
    if (!windowWidth) return 1; // Default for SSR
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 640) return 2;
    return 1;
  };
  
  const itemsToShow = getItemsToShow();
  
  const trendingProperties = [
    {
      id: 1,
      title: "Modern 3BHK Apartment in JP Nagar",
      price: "₹ 85 Lac",
      location: "JP Nagar, Bangalore",
      bedrooms: 3,
      bathrooms: 2,
      area: "1350 sq.ft",
      image: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg",
      tags: ["Apartment", "Ready to Move"],
      interest: 85,
    },
    {
      id: 2,
      title: "Luxury Villa in Koramangala",
      price: "₹ 2.1 Cr",
      location: "Koramangala, Bangalore",
      bedrooms: 4,
      bathrooms: 4,
      area: "2800 sq.ft",
      image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
      tags: ["Villa", "Premium"],
      interest: 92,
    },
    {
      id: 3,
      title: "Spacious 2BHK with Garden",
      price: "₹ 62 Lac",
      location: "HSR Layout, Bangalore",
      bedrooms: 2,
      bathrooms: 2,
      area: "1100 sq.ft",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      tags: ["Apartment", "Garden"],
      interest: 78,
    },
    {
      id: 4,
      title: "Modern 4BHK Penthouse",
      price: "₹ 1.8 Cr",
      location: "Indiranagar, Bangalore",
      bedrooms: 4,
      bathrooms: 3,
      area: "2200 sq.ft",
      image: "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png",
      tags: ["Penthouse", "Luxury"],
      interest: 88,
    },
    {
      id: 5,
      title: "Affordable 3BHK Villa",
      price: "₹ 95 Lac",
      location: "Electronic City, Bangalore",
      bedrooms: 3,
      bathrooms: 3,
      area: "1800 sq.ft",
      image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
      tags: ["Villa", "Gated Community"],
      interest: 75,
    },
    {
      id: 6,
      title: "Premium 3BHK Apartment",
      price: "₹ 1.2 Cr",
      location: "Whitefield, Bangalore",
      bedrooms: 3,
      bathrooms: 3,
      area: "1750 sq.ft",
      image: "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
      tags: ["Apartment", "Premium"],
      interest: 82,
    },
  ];
  
  const visibleProperties = trendingProperties.slice(
    currentIndex,
    currentIndex + itemsToShow
  );
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, trendingProperties.length - itemsToShow)
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold">Trending Properties</h2>
        </div>
        
        <Tabs defaultValue="mostViewed" className="w-full md:w-auto">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="mostViewed">Most Viewed</TabsTrigger>
            <TabsTrigger value="nearYou">Near You</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="relative">
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-4 w-full"
            initial={false}
            animate={{ x: `-${currentIndex * (100 / itemsToShow)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {trendingProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                itemsToShow={itemsToShow}
              />
            ))}
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            size="icon"
            variant="outline"
            onClick={nextSlide}
            disabled={currentIndex >= trendingProperties.length - itemsToShow}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: string;
    tags: string[];
    interest: number;
  };
  itemsToShow: number;
}

const PropertyCard = memo(function PropertyCard({ property, itemsToShow }: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  
  return (
    <motion.div
      className={`min-w-[${100 / itemsToShow}%] flex-shrink-0`} // Added flex-shrink-0 for safety in flex containers
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="overflow-hidden h-full flex flex-col"> {/* Ensure card takes full height of motion.div and allows footer to be pushed down */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform hover:scale-105"
          />
          
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm hover:bg-background/70 rounded-full"
            onClick={toggleFavorite}
          >
            <Heart
              className={cn("h-5 w-5", isFavorite && "fill-destructive text-destructive")}
            />
          </Button>
          
          <div className="absolute bottom-2 left-2 flex gap-1">
            {property.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-background/70 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        
        <CardContent className="p-4 flex-grow"> {/* Added flex-grow to allow content to expand */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg line-clamp-2 leading-tight">{property.title}</h3> {/* Increased font size, allowed 2 lines */}
            <span className="font-bold text-lg text-primary whitespace-nowrap">{property.price}</span> {/* Increased font size */}
          </div>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="h-3 w-3 flex-shrink-0" /> {/* Added flex-shrink-0 */}
            <span className="line-clamp-1">{property.location}</span>
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground"> {/* Applied muted-foreground to this row too */}
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4 text-primary/80" /> {/* Added subtle color to icons */}
              <span>{property.bedrooms} Beds</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4 text-primary/80" /> {/* Added subtle color to icons */}
              <span>{property.bathrooms} Baths</span>
            </div>
            
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4 text-primary/80" /> {/* Added subtle color to icons */}
              <span>{property.area}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-2 flex items-center justify-between"> {/* Adjusted padding top */}
          <div className="flex items-center gap-2">
            <Gauge className="h-4 w-4 text-primary" /> {/* Kept primary color for emphasis */}
            <div className="text-sm">
              <span className="font-medium">{property.interest}%</span> interested
            </div>
          </div>
          
          <Button size="sm">
            <ThumbsUp className="mr-1 h-3 w-3" />
            Interested
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
});