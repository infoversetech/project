"use client";

import React, { memo } from "react";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { useProperty } from "./PropertyContext";

export default function PropertySpecifications() {
  const { property } = useProperty();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        Specifications
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={item}>
          <h3 className="text-lg font-medium mb-4">Area Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Super Built-up Area</span>
              <span className="font-medium">{property.superBuiltUpArea} sq.ft</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Built-up Area</span>
              <span className="font-medium">{property.builtUpArea} sq.ft</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Carpet Area</span>
              <span className="font-medium">{property.carpetArea} sq.ft</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Balcony Area</span>
              <span className="font-medium">{property.balconyArea || "N/A"}</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <h3 className="text-lg font-medium mb-4">Building Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Floors</span>
              <span className="font-medium">{property.totalFloors}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Floor Number</span>
              <span className="font-medium">{property.floorNumber}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bedrooms</span>
              <span className="font-medium">{property.bedrooms}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Bathrooms</span>
              <span className="font-medium">{property.bathrooms}</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <h3 className="text-lg font-medium mb-4">Parking Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Covered Parking</span>
              <span className="font-medium">{property.coveredParking}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Open Parking</span>
              <span className="font-medium">{property.openParking}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Visitor Parking</span>
              <span className="font-medium">Available</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={item}>
          <h3 className="text-lg font-medium mb-4">Additional Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Age of Property</span>
              <span className="font-medium">{property.ageOfProperty}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Maintenance</span>
              <span className="font-medium">₹ {property.maintenance}/month</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Balconies</span>
              <span className="font-medium">{property.balconies}</span>
            </div>
            <Separator />
            <div className="flex justify-between">
              <span className="text-muted-foreground">Facing</span>
              <span className="font-medium">{property.facing}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default memo(PropertySpecifications);