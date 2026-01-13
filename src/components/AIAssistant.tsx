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
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-full hero-gradient text-primary-foreground shadow-elevated hover:opacity-90 transition-all duration-300",
          isOpen && "scale-0 opacity-0"
        )}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium text-sm">Ask AI</span>
      </button>

      {/* Chat Panel */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-elevated border border-border transition-all duration-300 origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg hero-gradient">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Campus Assistant</h3>
              <p className="text-xs text-muted-foreground">AI-powered help</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 h-[300px] flex flex-col">
          {/* Welcome Message */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <div className="p-3 rounded-full bg-secondary mb-4">
              <MessageCircle className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h4 className="font-medium text-foreground mb-2">How can I help you today?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ask me anything about academics, placements, or campus life.
            </p>

            {/* Quick Suggestions */}
            <div className="space-y-2 w-full">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setMessage(suggestion)}
                  className="w-full px-4 py-2 text-sm text-left rounded-lg bg-muted/50 hover:bg-muted text-foreground transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2.5 text-sm bg-muted rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
            />
            <Button 
              size="icon" 
              className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
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
          className="fixed inset-0 z-40 bg-background/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
