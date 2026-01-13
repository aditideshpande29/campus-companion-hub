import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 subtle-gradient" />
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Your intelligent campus companion</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Navigate Your Academic Journey with{' '}
            <span className="bg-clip-text text-transparent hero-gradient">
              Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Smart Campus Companion brings together academics, placements, campus life, 
            and community resources — all in one unified platform designed for SKNCOE students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="hero-gradient text-primary-foreground hover:opacity-90 transition-opacity px-8 h-12 text-base">
              Explore Platform
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 h-12 text-base">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border max-w-lg mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">3,500+</div>
              <div className="text-sm text-muted-foreground mt-1">Students</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Recruiters</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground mt-1">Departments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
