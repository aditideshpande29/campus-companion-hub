import { Bell, Calendar, Megaphone } from 'lucide-react';

const holidays = [
  { name: 'Republic Day', date: 'January 26' },
  { name: 'Holi', date: 'March 14' },
  { name: 'Good Friday', date: 'March 29' },
  { name: 'Independence Day', date: 'August 15' },
  { name: 'Ganesh Chaturthi', date: 'September 7' },
  { name: 'Dussehra', date: 'October 12' },
  { name: 'Diwali', date: 'November 1-4' },
];

const announcements = [
  {
    title: 'TCS Campus Drive',
    description: 'TCS NQT registration for 2024 batch. Eligibility: 60% and above.',
    date: 'Dec 15, 2024',
    type: 'placement',
  },
  {
    title: 'Infosys Recruitment',
    description: 'Infosys Power Programmer and Specialist Programmer roles open.',
    date: 'Dec 20, 2024',
    type: 'placement',
  },
  {
    title: 'Winter Vacation Notice',
    description: 'College will remain closed from December 25 to January 1.',
    date: 'Dec 10, 2024',
    type: 'notice',
  },
];

export function NoticesSection() {
  return (
    <div className="space-y-6">
      {/* Holidays */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-4 h-4 text-accent" />
          <h4 className="font-medium text-foreground">Academic Holidays 2024-25</h4>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {holidays.map((holiday) => (
            <div 
              key={holiday.name} 
              className="p-3 rounded-lg bg-muted/50 text-center hover:bg-muted transition-colors"
            >
              <div className="text-sm font-medium text-foreground">{holiday.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{holiday.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Announcements */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Megaphone className="w-4 h-4 text-accent" />
          <h4 className="font-medium text-foreground">Recent Announcements</h4>
        </div>
        <div className="space-y-3">
          {announcements.map((announcement) => (
            <div 
              key={announcement.title} 
              className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border-l-2 border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h5 className="font-medium text-foreground">{announcement.title}</h5>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      announcement.type === 'placement' 
                        ? 'bg-accent/10 text-accent' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {announcement.type === 'placement' ? 'Placement' : 'Notice'}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{announcement.description}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{announcement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
