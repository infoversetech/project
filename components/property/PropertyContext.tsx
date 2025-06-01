"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { PropertyData } from "@/lib/types";

interface PropertyContextType {
  property: PropertyData;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export function PropertyProvider({ 
  children, 
  property 
}: { 
  children: ReactNode; 
  property: PropertyData;
}) {
  return (
    <PropertyContext.Provider value={{ property }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  const context = useContext(PropertyContext);
  if (context === undefined) {
    throw new Error("useProperty must be used within a PropertyProvider");
  }
  return context;
}