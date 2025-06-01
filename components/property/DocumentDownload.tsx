"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function DocumentDownload() {
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Documents</h2>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          <span>All documents verified by Regaa</span>
        </div>
      </div>
      
      <Tabs defaultValue="legal">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="legal">Legal Documents</TabsTrigger>
          <TabsTrigger value="floor">Floor Plans</TabsTrigger>
          <TabsTrigger value="brochure">Brochures</TabsTrigger>
        </TabsList>
        
        <TabsContent value="legal" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DocumentCard 
              title="RERA Certificate" 
              type="PDF" 
              size="1.2 MB" 
              icon="legal" 
            />
            <DocumentCard 
              title="Property Deed" 
              type="PDF" 
              size="3.5 MB" 
              icon="legal" 
            />
            <DocumentCard 
              title="Tax Receipt" 
              type="PDF" 
              size="0.8 MB" 
              icon="legal" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="floor" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DocumentCard 
              title="Master Plan" 
              type="JPG" 
              size="2.4 MB" 
              icon="floor" 
            />
            <DocumentCard 
              title="3BHK Floor Plan" 
              type="JPG" 
              size="1.8 MB" 
              icon="floor" 
            />
            <DocumentCard 
              title="Site Plan" 
              type="PDF" 
              size="4.2 MB" 
              icon="floor" 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="brochure" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DocumentCard 
              title="Project Brochure" 
              type="PDF" 
              size="5.7 MB" 
              icon="brochure" 
            />
            <DocumentCard 
              title="Amenities Catalog" 
              type="PDF" 
              size="3.2 MB" 
              icon="brochure" 
            />
            <DocumentCard 
              title="Payment Plans" 
              type="PDF" 
              size="1.1 MB" 
              icon="brochure" 
            />
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-6 bg-secondary/30 p-4 rounded-lg text-sm text-muted-foreground">
        <p>Note: All documents are verified by Regaa. You need to contact the agent to access some of the legal documents.</p>
      </div>
    </motion.section>
  );
}

interface DocumentCardProps {
  title: string;
  type: string;
  size: string;
  icon: "legal" | "floor" | "brochure";
}

function DocumentCard({ title, type, size, icon }: DocumentCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "legal":
        return <FileText className="h-8 w-8 text-primary" />;
      case "floor":
        return <FileText className="h-8 w-8 text-chart-2" />;
      case "brochure":
        return <FileText className="h-8 w-8 text-chart-4" />;
      default:
        return <FileText className="h-8 w-8" />;
    }
  };
  
  return (
    <motion.div
      className={cn(
        "border rounded-lg p-4 flex items-center justify-between",
        "hover:border-primary/50 transition-colors cursor-pointer"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-secondary/50 p-2 rounded-lg">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{type} · {size}</p>
        </div>
      </div>
      
      <Button size="icon" variant="ghost">
        <Download className="h-5 w-5" />
      </Button>
    </motion.div>
  );
}