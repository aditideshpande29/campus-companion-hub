import { Instagram, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'SKNCOE Official',
    handle: '@skncoe_pune',
    description: 'Official college updates, events, and achievements',
    url: 'https://instagram.com/skncoe_pune',
    followers: '15K+',
  },
  {
    name: 'GDG SKNCOE',
    handle: '@gdg.skncoe',
    description: 'Google Developer Groups campus chapter activities',
    url: 'https://instagram.com/gdg.skncoe',
    followers: '3K+',
  },
];

export function CommunitySection() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Stay connected with campus life and community activities through our social channels.
      </p>
      <div className="grid gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors border border-transparent hover:border-accent/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-foreground group-hover:text-accent transition-colors">
                  {link.name}
                </div>
                <div className="text-sm text-muted-foreground">{link.handle}</div>
                <div className="text-xs text-muted-foreground mt-1">{link.description}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-muted-foreground">{link.followers}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
