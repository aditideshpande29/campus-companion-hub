import { GraduationCap } from 'lucide-react';

const links = {
  Quick: ['Home', 'Academics', 'Placements', 'Campus'],
  Resources: ['Library', 'Notices', 'Calendar', 'Downloads'],
  Connect: ['About SKNCOE', 'Contact', 'Feedback', 'Help'],
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 gradient-primary animate-gradient" />
      
      <div className="bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-primary animate-gradient">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold">Smart Campus</div>
                  <div className="text-xs text-background/60">Companion</div>
                </div>
              </div>
              <p className="text-sm text-background/60 max-w-xs">
                Your intelligent companion for navigating academic life at SKNCOE, Pune.
              </p>
            </div>

            {/* Links */}
            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <a 
                        href="#" 
                        className="text-sm text-background/60 hover:text-background transition-colors hover:translate-x-1 inline-block"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              2024 Smart Campus Companion. For SKNCOE students.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-background/50 hover:text-background transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
