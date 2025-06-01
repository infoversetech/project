"use client";

import React from "react";
import { 
  Bus, 
  Train, 
  Plane, 
  ShoppingBag, 
  School, 
  Building2, 
  Utensils, 
  Activity, 
  Clock 
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

interface TravelCardProps {
  icon: React.ReactNode;
  title: string;
  distance: string;
  time: string;
  color: string;
}

export default function TravelTime() {
  const travelCards: TravelCardProps[] = [
    {
      icon: <Bus className="h-6 w-6" />,
      title: "Bus Stop",
      distance: "0.5 km",
      time: "6 mins",
      color: "text-chart-1",
    },
    {
      icon: <Train className="h-6 w-6" />,
      title: "Metro Station",
      distance: "2.3 km",
      time: "15 mins",
      color: "text-chart-2",
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: "Airport",
      distance: "18 km",
      time: "45 mins",
      color: "text-chart-3",
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shopping Mall",
      distance: "3.2 km",
      time: "12 mins",
      color: "text-chart-4",
    },
    {
      icon: <School className="h-6 w-6" />,
      title: "School",
      distance: "1.5 km",
      time: "8 mins",
      color: "text-chart-5",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "IT Park",
      distance: "5.8 km",
      time: "20 mins",
      color: "text-chart-1",
    },
    {
      icon: <Utensils className="h-6 w-6" />,
      title: "Restaurants",
      distance: "1.0 km",
      time: "7 mins",
      color: "text-chart-2",
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Hospital",
      distance: "2.7 km",
      time: "10 mins",
      color: "text-chart-3",
    },
  ];
  
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
        Travel Time
      </motion.h2>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={container}
      >
        {travelCards.map((card, index) => (
          <TravelCard
            key={index}
            icon={card.icon}
            title={card.title}
            distance={card.distance}
            time={card.time}
            color={card.color}
          />
        ))}
      </motion.div>
    </motion.section>
  );
}

function TravelCard({ icon, title, distance, time, color }: TravelCardProps) {
  return (
    <motion.div
      className="border rounded-lg p-4 hover:border-primary/50 transition-colors"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("p-2 rounded-full bg-secondary/50", color)}>
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Distance</p>
          <p className="font-medium">{distance}</p>
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
      </div>
    </motion.div>
  );
}