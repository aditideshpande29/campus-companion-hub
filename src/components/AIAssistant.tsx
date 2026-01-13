import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const suggestions = [
    'What companies are visiting for placements?',
    'How do I apply for an internship?',
    'What are the exam dates?',
  ];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-4 rounded-full gradient-primary animate-gradient text-white shadow-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group",
          isOpen && "scale-0 opacity-0"
        )}
      >
        <div className="relative">
          <Sparkles className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
        </div>
        <span className="font-semibold text-sm">Ask AI</span>
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] bg-card rounded-3xl shadow-2xl border border-border/50 transition-all duration-500 origin-bottom-right overflow-hidden",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Header with gradient */}
        <div className="gradient-primary animate-gradient p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Campus Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs text-white/80">AI-powered help</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 h-[320px] flex flex-col bg-gradient-to-b from-secondary/30 to-card">
          {/* Welcome Message */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="p-4 rounded-2xl bg-secondary mb-4 animate-pulse-glow">
              <MessageCircle className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-semibold text-foreground mb-2 text-lg">How can I help you today?</h4>
            <p className="text-sm text-muted-foreground mb-5">
              Ask me anything about academics, placements, or campus life.
            </p>

            {/* Quick Suggestions */}
            <div className="space-y-2 w-full">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion}
                  onClick={() => setMessage(suggestion)}
                  className="w-full px-4 py-3 text-sm text-left rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:bg-primary/5 text-foreground transition-all duration-300 hover:scale-[1.02] animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border/50 bg-card">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-3 text-sm bg-secondary/50 rounded-xl border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 placeholder:text-muted-foreground transition-all"
            />
            <Button 
              size="icon" 
              className="gradient-primary animate-gradient text-white hover:opacity-90 transition-all duration-300 h-11 w-11 rounded-xl hover:scale-105 shrink-0"
              disabled={!message.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-foreground/10 backdrop-blur-sm md:hidden transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
