import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ChatSection = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your healthcare assistant. How can I help you find resources today?",
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, { role: "user", content: message }]);
      setMessage("");
      
      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "I'd be happy to help you with that. Let me find the best resources for you...",
          },
        ]);
      }, 1000);
    }
  };

  return (
    <section id="chat" className="py-20 bg-gradient-to-b from-warm-cream to-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-soft-teal to-sage-green text-white px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Assistant</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Personalized Healthcare Guidance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ask questions about healthcare options, find resources, or get help navigating the system
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="overflow-hidden border-2 border-primary/20 shadow-[var(--shadow-soft)]">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-soft-teal to-sage-green p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Healthcare AI Assistant</h3>
                  <p className="text-sm text-white/90">Always here to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-4 bg-warm-cream/30">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-card border-2 border-border/50 text-foreground"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-background border-t-2 border-border/50">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about healthcare options..."
                  className="flex-1 h-12 border-2 bg-background"
                />
                <Button 
                  variant="warm" 
                  size="lg"
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                For immediate assistance, call 1-800-HEALTH
              </p>
            </div>
          </Card>

          {/* Quick Questions */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {[
              "Find mental health resources",
              "Medication assistance programs",
              "Low-cost clinics nearby",
            ].map((question) => (
              <Button
                key={question}
                variant="soft"
                size="sm"
                onClick={() => setMessage(question)}
                className="text-sm"
              >
                {question}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatSection;