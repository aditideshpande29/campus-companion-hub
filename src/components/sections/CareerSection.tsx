import { Briefcase, BookMarked, Building2 } from 'lucide-react';

const internships = [
  { company: 'Persistent Systems', role: 'Software Intern', duration: '6 months' },
  { company: 'Infosys', role: 'InStep Intern', duration: '3 months' },
  { company: 'Tech Mahindra', role: 'Development Intern', duration: '4 months' },
];

const interviewTopics = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming',
  'Database Management Systems',
  'Operating Systems',
  'Computer Networks',
  'System Design Basics',
  'Aptitude & Reasoning',
  'Communication Skills',
];

const placementCompanies = [
  { name: 'TCS', package: '7.5 LPA' },
  { name: 'Infosys', package: '6.5 LPA' },
  { name: 'Wipro', package: '6 LPA' },
  { name: 'Capgemini', package: '7 LPA' },
  { name: 'Cognizant', package: '6.75 LPA' },
  { name: 'Accenture', package: '6.5 LPA' },
  { name: 'Persistent', package: '8 LPA' },
  { name: 'LTI Mindtree', package: '7.2 LPA' },
];

export function CareerSection() {
  return (
    <div className="space-y-6">
      {/* Internship Opportunities */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Briefcase className="w-4 h-4 text-accent" />
          <h4 className="font-medium text-foreground">Internship Opportunities</h4>
        </div>
        <div className="grid gap-3">
          {internships.map((internship) => (
            <div 
              key={internship.company} 
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <div>
                <div className="font-medium text-foreground text-sm">{internship.company}</div>
                <div className="text-xs text-muted-foreground">{internship.role}</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {internship.duration}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interview Preparation */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <BookMarked className="w-4 h-4 text-accent" />
          <h4 className="font-medium text-foreground">Interview Preparation</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {interviewTopics.map((topic) => (
            <span 
              key={topic} 
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Placement Companies */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="w-4 h-4 text-accent" />
          <h4 className="font-medium text-foreground">Top Recruiters</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {placementCompanies.map((company) => (
            <div 
              key={company.name} 
              className="p-3 rounded-lg bg-muted/50 text-center hover:bg-muted transition-colors"
            >
              <div className="font-medium text-foreground text-sm">{company.name}</div>
              <div className="text-xs text-accent mt-1">{company.package}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
