"use client";

import React from "react";
import { Wifi, Droplet, Plug, ShieldCheck, Dumbbell, Car, Trees, Flower, Warehouse, Bike, Calculator as Elevator, FireExtinguisher } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function AmenitiesGrid() {
  const { property } = useProperty();
  
  const amenitiesIcons: Record<string, React.ReactNode> = {
    "Power Backup": <Plug className="h-6 w-6" />,
    "24x7 Water Supply": <Droplet className="h-6 w-6" />,
    "WiFi Connectivity": <Wifi className="h-6 w-6" />,
    "Security": <ShieldCheck className="h-6 w-6" />,
    "Gym": <Dumbbell className="h-6 w-6" />,
    "Parking": <Car className="h-6 w-6" />,
    "Garden": <Flower className="h-6 w-6" />,
    "Park": <Trees className="h-6 w-6" />,
    "Storage": <Warehouse className="h-6 w-6" />,
    "Bicycle Stand": <Bike className="h-6 w-6" />,
    "Lift": <Elevator className="h-6 w-6" />,
    "Fire Safety": <FireExtinguisher className="h-6 w-6" />,
  };
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-6"
        variants={item}
      >
        Amenities
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        variants={container}
      >
        {property.amenities.map((amenity, index) => (
          <motion.div
            key={index}
            className={cn(
              "flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/30",
              "hover:bg-secondary/50 transition-colors cursor-pointer"
            )}
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-2">
              {amenitiesIcons[amenity] || <ShieldCheck className="h-6 w-6" />}
            </div>
            <span className="text-center text-sm font-medium">{amenity}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}