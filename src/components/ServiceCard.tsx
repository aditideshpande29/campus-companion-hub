import { useState, ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
}

export function ServiceCard({ icon, title, description, children, delay = 0 }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div 
        className={cn(
          "group bg-card rounded-xl border border-border shadow-card transition-all duration-300 overflow-hidden",
          isExpanded ? "shadow-elevated" : "hover:shadow-card-hover hover:border-accent/30"
        )}
      >
        {/* Card Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-xl"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary text-secondary-foreground shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                {icon}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
            <ChevronDown 
              className={cn(
                "w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 mt-1",
                isExpanded && "rotate-180"
              )} 
            />
          </div>
        </button>

        {/* Expanded Content */}
        <div 
          className={cn(
            "grid transition-all duration-300 ease-out",
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
