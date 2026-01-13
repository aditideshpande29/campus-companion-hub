import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
  accentColor?: string;
}

export function ServiceCard({ icon, title, description, children, delay = 0, accentColor }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="animate-fade-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className={cn(
          "group bg-card rounded-2xl border border-border/50 card-glow transition-all duration-500 overflow-hidden",
          isExpanded && "shadow-xl border-primary/20"
        )}
      >
        {/* Card Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-2xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div 
                className={cn(
                  "flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                  isExpanded 
                    ? "gradient-primary animate-gradient text-white shadow-lg" 
                    : "bg-secondary text-secondary-foreground group-hover:bg-primary/10 group-hover:text-primary"
                )}
              >
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
            <div className={cn(
              "p-2 rounded-full transition-all duration-300",
              isExpanded ? "bg-primary/10 rotate-180" : "bg-muted group-hover:bg-primary/5"
            )}>
              <ChevronDown 
                className={cn(
                  "w-5 h-5 transition-colors duration-300",
                  isExpanded ? "text-primary" : "text-muted-foreground"
                )} 
              />
            </div>
          </div>
        </button>

        {/* Expanded Content */}
        <div 
          className={cn(
            "grid transition-all duration-500 ease-out",
            isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="px-6 pb-6 pt-2 border-t border-border/50">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
