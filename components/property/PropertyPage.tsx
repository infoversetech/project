"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PropertyHeader from "./PropertyHeader";
import PropertyHero from "./PropertyHero";
import TabNavigation from "./TabNavigation";
import PropertyOverview from "./PropertyOverview";
import AmenitiesGrid from "./AmenitiesGrid";
import PropertySpecifications from "./PropertySpecifications";
import LocationMap from "./LocationMap";
import MediaGallery from "./MediaGallery";
import ContactOwner from "./ContactOwner";
import DocumentDownload from "./DocumentDownload";
import TravelTime from "./TravelTime";
import LoanAssistance from "./LoanAssistance";
import TrendingListings from "./TrendingListings";
import AiChatBot from "./AiChatBot"; // Import AiChatBot
import { PropertyProvider } from "./PropertyContext";
import { MOCK_PROPERTY_DATA } from "@/lib/mockData";

export default function PropertyPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");
  const property = MOCK_PROPERTY_DATA;

  console.log("Property ID:", id); // Log the ID

  return (
    <PropertyProvider property={property}>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-2 text-center text-sm text-muted-foreground">
          Displaying details for Property ID: {id} (Note: Data below is mock data)
        </div>
        <PropertyHeader />
        <PropertyHero />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-4 pb-16">
          <motion.div
            id="overview" role="tabpanel" aria-labelledby="overview-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <PropertyOverview />
          </motion.div>
          
          <motion.div
            id="amenities" role="tabpanel" aria-labelledby="amenities-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <AmenitiesGrid />
          </motion.div>
          
          <motion.div
            id="specifications" role="tabpanel" aria-labelledby="specifications-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <PropertySpecifications />
          </motion.div>
          
          <motion.div
            id="location" role="tabpanel" aria-labelledby="location-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <LocationMap />
          </motion.div>
          
          <motion.div
            id="media" role="tabpanel" aria-labelledby="media-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <MediaGallery />
          </motion.div>
          
          <motion.div
            id="contact" role="tabpanel" aria-labelledby="contact-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <ContactOwner />
          </motion.div>
          
          <motion.div
            id="documents" role="tabpanel" aria-labelledby="documents-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <DocumentDownload />
          </motion.div>
          
          <motion.div
            id="travelTime" role="tabpanel" aria-labelledby="travelTime-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <TravelTime />
          </motion.div>
          
          <motion.div
            id="loanAssistance" role="tabpanel" aria-labelledby="loanAssistance-tab" className="pt-16 -mt-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <LoanAssistance />
          </motion.div>
          
          {/* TrendingListings is not part of the tabbed content */}
          <motion.div
            className="pt-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }}
          >
            <TrendingListings />
          </motion.div>
        </div>
        <AiChatBot /> {/* Add AiChatBot here */}
      </div>
    </PropertyProvider>
  );
}