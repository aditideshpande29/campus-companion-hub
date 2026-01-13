import { BookOpen, Bell, Briefcase, Building2, Users, HelpCircle } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { AcademicsSection } from './sections/AcademicsSection';
import { NoticesSection } from './sections/NoticesSection';
import { CareerSection } from './sections/CareerSection';
import { CampusSection } from './sections/CampusSection';
import { CommunitySection } from './sections/CommunitySection';
import { QueriesSection } from './sections/QueriesSection';

const services = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Academics',
    description: 'Curriculum, subjects, and academic resources for all years',
    content: <AcademicsSection />,
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Notices & Holidays',
    description: 'Important announcements and academic calendar',
    content: <NoticesSection />,
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Career & Placements',
    description: 'Internships, placement drives, and interview preparation',
    content: <CareerSection />,
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Campus Information',
    description: 'Buildings, departments, and campus facilities',
    content: <CampusSection />,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Community',
    description: 'Connect with college clubs and social communities',
    content: <CommunitySection />,
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: 'Student Queries',
    description: 'Get answers to frequently asked questions',
    content: <QueriesSection />,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access all essential student resources in one place. Click on any card to explore detailed information.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            >
              {service.content}
            </ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
}
