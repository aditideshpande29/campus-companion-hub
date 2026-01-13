import { BookOpen, FileText, Calendar, Users } from 'lucide-react';

const years = [
  {
    year: 'First Year',
    subjects: ['Engineering Mathematics I & II', 'Physics', 'Chemistry', 'Basic Electrical Engineering', 'Programming Fundamentals'],
    icon: BookOpen,
  },
  {
    year: 'Second Year',
    subjects: ['Data Structures', 'Object-Oriented Programming', 'Discrete Mathematics', 'Digital Electronics', 'Database Management'],
    icon: FileText,
  },
  {
    year: 'Third Year',
    subjects: ['Operating Systems', 'Computer Networks', 'Software Engineering', 'Machine Learning Basics', 'Web Technologies'],
    icon: Calendar,
  },
  {
    year: 'Final Year',
    subjects: ['Artificial Intelligence', 'Cloud Computing', 'Project Work', 'Industry Internship', 'Elective Specializations'],
    icon: Users,
  },
];

export function AcademicsSection() {
  return (
    <div className="space-y-4">
      {years.map((item, index) => (
        <div 
          key={item.year} 
          className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center gap-3 mb-3">
            <item.icon className="w-4 h-4 text-accent" />
            <h4 className="font-medium text-foreground">{item.year}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.subjects.map((subject) => (
              <span 
                key={subject} 
                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
