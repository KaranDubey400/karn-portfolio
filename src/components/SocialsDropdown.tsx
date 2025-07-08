
import React from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Github, Instagram, MessageCircle, Twitch, Twitter } from 'lucide-react';

const BlueskyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <g>
      <path d="M16 21.5c-2.5 2.5-7.5 2.5-10 0s-2.5-7.5 0-10c2.5-2.5 7.5-2.5 10 0 2.5-2.5 7.5-2.5 10 0s2.5 7.5 0 10-7.5 2.5-10 0z" fill="#0077FF"/>
      <circle cx="16" cy="16" r="3" fill="#fff"/>
    </g>
  </svg>
);

const SocialsDropdown = () => {
  const socials = [
    {
      name: 'GitHub',
      username: '@KaranDubey400',
      icon: Github,
      url: 'https://github.com/KaranDubey400'
    },
    {
      name: 'Discord',
      username: 'Discord Server',
      icon: MessageCircle,
      url: 'https://discord.gg/M67VY5haYe'
    },
    {
      name: 'Instagram',
      username: 'google',
      icon: Instagram,
      url: '#'
    },
    {
      name: 'Twitter/X',
      username: '@CodewithKarn',
      icon: Twitter,
      url: 'https://x.com/CodewithKarn'
    },
    {
      name: 'Twitch',
      username: 'null',
      icon: Twitch,
      url: '#'
    },
    {
      name: 'Bluesky',
      username: '@0karn.bsky.social',
      icon: BlueskyIcon,
      url: 'https://bsky.app/profile/0karn.bsky.social'
    }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
        >
          My Socials
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur-sm">
        {socials.map((social) => (
          <DropdownMenuItem 
            key={social.name}
            onClick={() => social.url !== '#' && window.open(social.url, '_blank')}
            className={social.url !== '#' ? "cursor-pointer" : "cursor-default opacity-50"}
          >
            <social.icon className="mr-3 h-4 w-4" />
            <div className="flex flex-col">
              <span className="font-medium">{social.name}</span>
              <span className="text-xs text-muted-foreground">{social.username}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SocialsDropdown;
