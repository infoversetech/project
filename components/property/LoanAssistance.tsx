"use client";

import React, { useState, memo } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BadgeDollarSign, 
  Calendar, 
  PiggyBank, 
  Calculator, 
  ArrowRight 
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Legend, 
  Label 
} from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useProperty } from "./PropertyContext";

export default function LoanAssistance() {
  const { property } = useProperty();
  const [loanAmount, setLoanAmount] = useState(80);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  
  // Calculate loan details
  const propertyValue = parseInt(property.price.replace(/[^\d]/g, ""));
  const loanValue = (propertyValue * loanAmount) / 100;
  const downPayment = propertyValue - loanValue;
  
  // Calculate EMI
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const emi = 
    (loanValue * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
    (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  
  const totalAmount = emi * totalMonths;
  const totalInterest = totalAmount - loanValue;
  
  // Chart data
  const pieData = [
    { name: "Principal", value: loanValue },
    { name: "Interest", value: totalInterest },
  ];
  
  const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))"];
  
  const formatCurrency = (value: number) => {
    if (value >= 10000000) {
      return `₹ ${(value / 10000000).toFixed(2)} Cr`;
    } else if (value >= 100000) {
      return `₹ ${(value / 100000).toFixed(2)} Lac`;
    } else {
      return `₹ ${value.toFixed(2)}`;
    }
  };
  
  return (
    <motion.section
      className="bg-card rounded-xl shadow-sm p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6">Loan Assistance</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Loan Amount (%)</label>
              <span className="text-sm font-medium">{loanAmount}%</span>
            </div>
            <Slider
              value={[loanAmount]}
              min={10}
              max={90}
              step={5}
              onValueChange={(value) => setLoanAmount(value[0])}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>10%</span>
              <span>90%</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Interest Rate (%)</label>
              <span className="text-sm font-medium">{interestRate}%</span>
            </div>
            <Slider
              value={[interestRate]}
              min={6}
              max={12}
              step={0.1}
              onValueChange={(value) => setInterestRate(value[0])}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>6%</span>
              <span>12%</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Loan Tenure (Years)</label>
              <span className="text-sm font-medium">{loanTenure} years</span>
            </div>
            <Slider
              value={[loanTenure]}
              min={5}
              max={30}
              step={1}
              onValueChange={(value) => setLoanTenure(value[0])}
              className="mb-6"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>5 years</span>
              <span>30 years</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-secondary/30 p-4 rounded-lg">
              <h3 className="text-sm text-muted-foreground mb-1">Down Payment</h3>
              <p className="text-lg font-semibold">{formatCurrency(downPayment)}</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg">
              <h3 className="text-sm text-muted-foreground mb-1">Loan Amount</h3>
              <p className="text-lg font-semibold">{formatCurrency(loanValue)}</p>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="text-sm text-muted-foreground mb-1">Monthly EMI</h3>
              <p className="text-lg font-semibold text-primary">{formatCurrency(emi)}</p>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg">
              <h3 className="text-sm text-muted-foreground mb-1">Total Interest</h3>
              <p className="text-lg font-semibold">{formatCurrency(totalInterest)}</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2 flex flex-col">
          <div className="h-[250px] mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  <Label
                    value={formatCurrency(totalAmount)}
                    position="center"
                    className="text-xs font-medium"
                  />
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-auto">
            <Tabs defaultValue="banks">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="banks">Banks</TabsTrigger>
                <TabsTrigger value="nbfc">NBFC</TabsTrigger>
              </TabsList>
              
              <TabsContent value="banks" className="mt-4">
                <div className="space-y-3">
                  <BankOption 
                    name="HDFC Bank" 
                    rate="8.40%" 
                    processing="0.50%" 
                  />
                  <BankOption 
                    name="SBI" 
                    rate="8.55%" 
                    processing="0.35%" 
                  />
                  <BankOption 
                    name="ICICI Bank" 
                    rate="8.70%" 
                    processing="0.40%" 
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="nbfc" className="mt-4">
                <div className="space-y-3">
                  <BankOption 
                    name="Bajaj Finserv" 
                    rate="9.20%" 
                    processing="0.50%" 
                  />
                  <BankOption 
                    name="LIC Housing" 
                    rate="8.90%" 
                    processing="0.40%" 
                  />
                  <BankOption 
                    name="DHFL" 
                    rate="9.10%" 
                    processing="0.45%" 
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <Button className="w-full mt-4">
              <Calculator className="mr-2 h-4 w-4" />
              Get Pre-approved Loan
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

interface BankOptionProps {
  name: string;
  rate: string;
  processing: string;
}

const BankOption = memo(function BankOption({ name, rate, processing }: BankOptionProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg hover:border-primary/50 cursor-pointer">
      <div className="font-medium">{name}</div>
      <div className="flex items-center gap-4">
        <div>
          <div className="text-xs text-muted-foreground">Interest Rate</div>
          <div className="font-medium">{rate}</div>
        </div>
        <ArrowRight className="h-4 w-4 text-primary" />
      </div>
    </div>
  );
});