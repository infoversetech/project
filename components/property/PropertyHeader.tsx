"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  User, 
  PlusCircle,
  Menu,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { useProperty } from "./PropertyContext";

export default function PropertyHeader() {
  const { property } = useProperty();
  
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/" className="block" aria-label="Homepage">
              <Image src="https://dev.regaatech.com/images/logo.png" alt="Regaa Technologies Logo" width={100} height={32} className="h-8 w-auto" />
            </a>
            
            <div className="hidden md:flex items-center ml-6">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{property.location.city}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Mumbai</DropdownMenuItem>
                  <DropdownMenuItem>Delhi</DropdownMenuItem>
                  <DropdownMenuItem>Bangalore</DropdownMenuItem>
                  <DropdownMenuItem>Pune</DropdownMenuItem>
                  <DropdownMenuItem>Chennai</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Dashboard
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Saved
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Alerts
            </Button>
            <Button className="bg-primary text-primary-foreground rounded-full hidden sm:flex">
              <PlusCircle className="mr-2 h-4 w-4" />
              Post Property
            </Button>
            <Avatar>
              <AvatarImage src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="User avatar" />
              <AvatarFallback>SP</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}