"use client";

import React, { useState, useEffect } from "react";
import { 
  Info, 
  Home, 
  Map, 
  Clock, 
  Image, 
  Phone, 
  FileText,
  CreditCard,
  Navigation,
  LightbulbIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const [sticky, setSticky] = useState(false);
  
  const tabs: TabItem[] = [
    { id: "overview", label: "Overview", icon: <Info className="h-4 w-4" /> },
    { id: "amenities", label: "Amenities", icon: <LightbulbIcon className="h-4 w-4" /> },
    { id: "specifications", label: "Specifications", icon: <Home className="h-4 w-4" /> },
    { id: "location", label: "Location", icon: <Map className="h-4 w-4" /> },
    { id: "media", label: "Photos", icon: <Image className="h-4 w-4" /> },
    { id: "contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
    { id: "documents", label: "Documents", icon: <FileText className="h-4 w-4" /> },
    { id: "travelTime", label: "Travel Time", icon: <Navigation className="h-4 w-4" /> },
    { id: "loanAssistance", label: "Loan", icon: <CreditCard className="h-4 w-4" /> },
  ];
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const tabSection = document.getElementById("tab-navigation");
      if (tabSection) {
        const tabPosition = tabSection.getBoundingClientRect().top;
        setSticky(tabPosition <= 64); // 64px is the header height
      }
      
      // Update active tab based on scroll position
      const sections = tabs.map(tab => document.getElementById(tab.id));
      const scrollPosition = window.scrollY + 200; // 200px offset
      
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveTab(tabs[index].id);
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveTab, tabs]);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    
    // Smooth scroll to section
    const section = document.getElementById(tabId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120, // Offset for header and tab navigation
        behavior: "smooth",
      });
    }
  };
  
  return (
    <motion.div 
      id="tab-navigation"
      className={cn(
        "w-full bg-background z-40 border-b transition-all duration-200",
        sticky ? "sticky top-16 shadow-sm" : ""
      )}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center overflow-x-auto py-2 scrollbar-hide">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={cn(
                "flex items-center gap-1 px-4 py-2 whitespace-nowrap rounded-full mr-2 text-sm font-medium transition-colors",
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
              onClick={() => handleTabClick(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}