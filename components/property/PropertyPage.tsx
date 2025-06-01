"use client";

import React, { useState } from "react";
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
import { PropertyProvider } from "./PropertyContext";
import { MOCK_PROPERTY_DATA } from "@/lib/mockData";

export default function PropertyPage({ id }: { id: string }) {
  const [activeTab, setActiveTab] = useState("overview");
  const property = MOCK_PROPERTY_DATA;

  return (
    <PropertyProvider property={property}>
      <div className="min-h-screen bg-background">
        <PropertyHeader />
        <PropertyHero />
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="container mx-auto px-4 pb-16">
          <div id="overview" className="pt-16 -mt-16">
            <PropertyOverview />
          </div>
          
          <div id="amenities" className="pt-16 -mt-16">
            <AmenitiesGrid />
          </div>
          
          <div id="specifications" className="pt-16 -mt-16">
            <PropertySpecifications />
          </div>
          
          <div id="location" className="pt-16 -mt-16">
            <LocationMap />
          </div>
          
          <div id="media" className="pt-16 -mt-16">
            <MediaGallery />
          </div>
          
          <div id="contact" className="pt-16 -mt-16">
            <ContactOwner />
          </div>
          
          <div id="documents" className="pt-16 -mt-16">
            <DocumentDownload />
          </div>
          
          <div id="travelTime" className="pt-16 -mt-16">
            <TravelTime />
          </div>
          
          <div id="loanAssistance" className="pt-16 -mt-16">
            <LoanAssistance />
          </div>
          
          <div className="pt-12">
            <TrendingListings />
          </div>
        </div>
      </div>
    </PropertyProvider>
  );
}