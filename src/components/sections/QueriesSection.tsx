import { HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
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
        {sampleQueries.map((query, index) => (
          <button
            key={query}
            className="w-full flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-left transition-all duration-300 group hover:scale-[1.02]"
          >
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <HelpCircle className="w-4 h-4 shrink-0" />
            </div>
            <span className="text-sm text-foreground flex-1">{query}</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>

      <Button className="w-full mt-4 gradient-primary animate-gradient text-white hover:opacity-90 transition-all duration-300 h-12 font-semibold hover:scale-[1.02]">
        <Sparkles className="w-4 h-4 mr-2" />
        Ask a Question
      </Button>
    </div>
  );
}
