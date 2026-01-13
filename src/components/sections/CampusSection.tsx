import { Building, MapPin } from 'lucide-react';

const buildings = [
  {
    name: 'Old Building',
    location: 'Ambegaon',
    departments: [
      'Computer Engineering',
      'Information Technology',
      'Electronics & Telecommunication',
      'Mechanical Engineering',
    ],
  },
  {
    name: 'New Building',
    location: 'Vadgaon',
    departments: [
      'Civil Engineering',
      'Electrical Engineering',
      'Artificial Intelligence & Data Science',
      'First Year Engineering',
    ],
  },
];

export function CampusSection() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {buildings.map((building) => (
        <div 
          key={building.name} 
          className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-secondary">
              <Building className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">{building.name}</h4>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" />
                {building.location}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Departments
            </div>
            <div className="flex flex-wrap gap-2">
              {building.departments.map((dept) => (
                <span 
                  key={dept} 
                  className="px-2 py-1 text-xs rounded-md bg-card border border-border text-foreground"
                >
                  {dept}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
