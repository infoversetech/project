"use client";

import React, { memo } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useProperty } from "./PropertyContext";

export default function LocationMap() {
  const { property } = useProperty();
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Location</h2>
      
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-primary" />
        <span className="font-medium">{property.location.address}, {property.location.city}, {property.location.state} - {property.location.pinCode}</span>
      </div>
      
      <div className="mb-6 rounded-lg overflow-hidden border h-[400px] bg-muted flex items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
              <p>Map view would load here</p>
              <p className="text-sm text-muted-foreground">Using Google Maps API</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button className="flex-1">
          <Navigation className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
        <Button variant="outline" className="flex-1">
          <ExternalLink className="mr-2 h-4 w-4" />
          View on Google Maps
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <div className="bg-secondary/30 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Landmark</h3>
          <p className="text-sm text-muted-foreground">{property.location.landmark || "None specified"}</p>
        </div>
        <div className="bg-secondary/30 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Locality</h3>
          <p className="text-sm text-muted-foreground">{property.location.locality}</p>
        </div>
        <div className="bg-secondary/30 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Public Transport</h3>
          <p className="text-sm text-muted-foreground">Bus Stop (0.5 km), Metro Station (2 km)</p>
        </div>
      </div>
    </motion.section>
  );
}

export default memo(LocationMap);