"use client"; // Needs to be a client component for state and interaction
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react"; // Added Bot icon

export default function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you with this property?" }
  ]);
  const [inputText, setInputText] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { sender: "user", text: inputText.trim() }]);
      // Placeholder for bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: "bot", text: "Thanks for your message! I am currently under development. More features coming soon." }]);
      }, 1000);
      setInputText("");
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg z-50"
        aria-label="Open AI Chat"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-[calc(100%-3rem)] sm:w-80 h-96 shadow-xl flex flex-col">
        <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6" />
            <CardTitle className="text-lg">AI Property Assistant</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleChat} className="text-primary-foreground hover:bg-primary/80">
            <X className="h-5 w-5" />
            <span className="sr-only">Close chat</span>
          </Button>
        </CardHeader>
        <CardContent className="flex-grow overflow-y-auto p-4 space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}>
              <div className={`px-3 py-2 rounded-lg max-w-[70%] text-sm ${
                msg.sender === "bot"
                  ? "bg-muted text-foreground"
                  : "bg-primary text-primary-foreground"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="p-2 border-t">
          <div className="flex w-full gap-1">
            <Input
              placeholder="Type a message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-grow"
            />
            <Button onClick={handleSend} size="icon" aria-label="Send message">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
