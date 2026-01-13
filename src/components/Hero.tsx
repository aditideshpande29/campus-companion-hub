import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background mesh */}
      <div className="absolute inset-0 gradient-mesh animate-gradient" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-40 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-[15%] w-4 h-4 bg-primary rounded-full animate-pulse-glow" />
      <div className="absolute top-1/3 right-[20%] w-3 h-3 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-[25%] w-2 h-2 bg-purple-500 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-lg text-sm font-medium mb-8 animate-fade-up gradient-border"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-foreground">Your intelligent campus companion</span>
          </div>

          {/* Main Heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Navigate Your Academic{' '}
            <br className="hidden md:block" />
            Journey with{' '}
            <span className="gradient-text">
              Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            Smart Campus Companion brings together academics, placements, campus life, 
            and community resources — all in one unified platform designed for SKNCOE students.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button 
              size="lg" 
              className="gradient-hero animate-gradient text-white hover:opacity-90 transition-all duration-300 px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explore Platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 h-14 text-base font-medium border-2 hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 mt-20 max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {[
              { value: '3,500+', label: 'Students' },
              { value: '50+', label: 'Recruiters' },
              { value: '8', label: 'Departments' },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-4 rounded-2xl bg-card/60 backdrop-blur-sm border border-border/50 card-glow transition-all duration-300 hover:scale-105"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
