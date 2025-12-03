import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const ChatSection = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your healthcare assistant. How can I help you find resources today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for ZIP code search events from Hero
  useEffect(() => {
    const handleZipSearch = (event: CustomEvent<{ zipCode: string }>) => {
      const query = `Find healthcare facilities and resources near ZIP code ${event.detail.zipCode}`;
      const userMessage: Message = { role: "user", content: query };
      const updatedMessages = [...messages, userMessage];
      
      setMessages(updatedMessages);
      setIsLoading(true);
      streamChat(updatedMessages);
    };

    window.addEventListener("zipCodeSearch", handleZipSearch as EventListener);
    return () => {
      window.removeEventListener("zipCodeSearch", handleZipSearch as EventListener);
    };
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/healthcare-chat`;
    
    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: userMessages }),
      });

      if (!resp.ok) {
        if (resp.status === 429) {
          toast({
            title: "Rate limit exceeded",
            description: "Please try again in a moment.",
            variant: "destructive",
          });
          return;
        }
        if (resp.status === 402) {
          toast({
            title: "Service limit reached",
            description: "AI usage limit reached. Please contact support.",
            variant: "destructive",
          });
          return;
        }
        throw new Error("Failed to start chat stream");
      }

      if (!resp.body) throw new Error("No response body");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let streamDone = false;
      let assistantMessage = "";

      // Add empty assistant message that will be filled
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantMessage += content;
              setMessages((prev) => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = {
                  role: "assistant",
                  content: assistantMessage,
                };
                return newMessages;
              });
            }
          } catch {
            textBuffer = line + "\n" + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
      // Remove the empty assistant message on error
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      const userMessage: Message = { role: "user", content: message };
      const updatedMessages = [...messages, userMessage];
      
      setMessages(updatedMessages);
      setMessage("");
      setIsLoading(true);

      await streamChat(updatedMessages);
    }
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
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
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-card border-2 border-border/50 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-background border-t-2 border-border/50">
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                  placeholder="Ask about healthcare options..."
                  className="flex-1 h-12 border-2 bg-background"
                  disabled={isLoading}
                />
                <Button 
                  variant="warm" 
                  size="lg"
                  onClick={handleSend}
                  disabled={!message.trim() || isLoading}
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
                onClick={() => handleQuickQuestion(question)}
                disabled={isLoading}
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
