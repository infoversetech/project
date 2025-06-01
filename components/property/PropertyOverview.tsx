"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, User, Shield, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useProperty } from "./PropertyContext";

export default function PropertyOverview() {
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
        className="text-2xl font-bold mb-4"
        variants={item}
      >
        Overview
      </motion.h2>
      
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={item}>
        <div className="md:col-span-2">
          <p className="text-muted-foreground mb-4">
            {property.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-secondary/50">
              <Clock className="h-3 w-3 mr-1" />
              {property.possessionStatus}
            </Badge>
            <Badge variant="outline" className="bg-secondary/50">
              <User className="h-3 w-3 mr-1" />
              {property.ownershipType}
            </Badge>
            <Badge variant="outline" className="bg-secondary/50">
              <Shield className="h-3 w-3 mr-1" />
              RERA Approved
            </Badge>
          </div>
          
          <Separator className="my-4" />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Property Type</div>
              <div className="font-medium">{property.propertyType}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Furnishing</div>
              <div className="font-medium">{property.furnishingStatus}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Transaction Type</div>
              <div className="font-medium">{property.transactionType}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Listed by</div>
              <div className="font-medium">{property.listedBy}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Possession</div>
              <div className="font-medium">{property.possessionStatus}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Age of Property</div>
              <div className="font-medium">{property.ageOfProperty}</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="bg-secondary/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="space-y-2">
              {property.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Ready to Move</h3>
            <p className="text-sm text-muted-foreground">
              This property is ready for possession and all legal formalities are completed.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}