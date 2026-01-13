import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { AIAssistant } from '@/components/AIAssistant';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesGrid />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Index;
