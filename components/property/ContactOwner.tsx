"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Mail, User, Calendar, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useProperty } from "./PropertyContext";

export default function ContactOwner() {
  const { property } = useProperty();
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Contact Owner</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Avatar className="h-16 w-16">
                <AvatarImage src={property.owner.profileImage} />
                <AvatarFallback>{property.owner.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold">{property.owner.name}</h3>
                <p className="text-muted-foreground">{property.owner.type}</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/50 p-2 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Phone</div>
                  <div className="font-medium">{property.owner.phone}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-secondary/50 p-2 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">{property.owner.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-secondary/50 p-2 rounded-full">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Available</div>
                  <div className="font-medium">Mon-Fri, 9am-6pm</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-4">
            <h4 className="font-medium mb-2">Agent Verification</h4>
            <p className="text-sm text-muted-foreground">This agent is verified by Regaa and has a proven track record of successful transactions.</p>
          </div>
        </div>
        
        <div className="bg-secondary/30 rounded-lg p-6">
          <h3 className="font-semibold mb-4">Send a Message</h3>
          
          <form className="space-y-4">
            <div>
              <Input placeholder="Your Name" className="bg-card" />
            </div>
            <div>
              <Input placeholder="Phone Number" className="bg-card" />
            </div>
            <div>
              <Input placeholder="Email Address" className="bg-card" />
            </div>
            <div>
              <Textarea 
                placeholder="I am interested in this property and would like to know more about..."
                className="bg-card min-h-[120px]"
              />
            </div>
            
            <div className="flex gap-4">
              <Button className="flex-1">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}