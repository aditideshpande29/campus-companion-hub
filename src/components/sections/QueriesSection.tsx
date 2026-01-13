import { HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const sampleQueries = [
  'What is the eligibility for TCS NQT?',
  'How to apply for an internship?',
  'When are the semester exams scheduled?',
  'How to get a bonafide certificate?',
  'What are the library timings?',
];

export function QueriesSection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Have questions about academics, placements, or campus life? 
        Our AI-powered assistant can help you find answers quickly.
      </p>

      <div className="space-y-2">
        <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
          Popular Questions
        </div>
        {sampleQueries.map((query) => (
          <button
            key={query}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted text-left transition-colors group"
          >
            <HelpCircle className="w-4 h-4 text-muted-foreground shrink-0" />
            <span className="text-sm text-foreground">{query}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>

      <Button className="w-full mt-4 accent-gradient text-accent-foreground hover:opacity-90 transition-opacity">
        Ask a Question
      </Button>
    </div>
  );
}
