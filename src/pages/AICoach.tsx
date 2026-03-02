import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Bot, Send } from "lucide-react";

interface Message {
  role: "user" | "ai";
  text: string;
}

const initialMessages: Message[] = [
  { role: "ai", text: "Hey! I'm your AURAFIT AI Coach. I've analyzed your recent logs. How can I help you optimize today?" },
];

const aiResponses = [
  "Based on your current data, your protein intake is 18% below target. I recommend adding a whey shake post-workout and incorporating Greek yogurt as an evening snack.",
  "Your sleep quality dropped by 8% over the last 3 days. I recommend reducing screen time after 9 PM and keeping your room below 19°C.",
  "Great news! Your recovery index is at 92% today. You're cleared for high-intensity training. I recommend focusing on compound lifts today.",
  "I notice a pattern — your performance dips on Tuesdays. This correlates with your Monday late-night sessions. Consider shifting your schedule.",
  "You've been on a 7-day streak! Your consistency is paying off. Current trajectory puts you at your goal weight by April 12.",
];

const AICoach = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((m) => [...m, { role: "ai", text: response }]);
      setTyping(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-[calc(100vh-3rem)]">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-foreground">AI Coach</h1>
          <p className="text-sm text-muted-foreground">Your intelligent fitness advisor</p>
        </div>

        <div className="flex-1 glass rounded-2xl p-4 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-muted/50 text-foreground rounded-bl-md"
                }`}>
                  {m.role === "ai" && (
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[10px] font-semibold text-primary">AURAFIT AI</span>
                    </div>
                  )}
                  {m.text}
                </div>
              </motion.div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted/50 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="mt-4 flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask your AI Coach..."
              className="flex-1 bg-muted/30 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={send}
              className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity glow-primary"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default AICoach;
