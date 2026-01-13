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
          className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <item.icon className="w-4 h-4" />
            </div>
            <h4 className="font-medium text-foreground">{item.year}</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {item.subjects.map((subject) => (
              <span 
                key={subject} 
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border/50 text-foreground hover:border-primary/30 hover:bg-primary/5 transition-colors"
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
