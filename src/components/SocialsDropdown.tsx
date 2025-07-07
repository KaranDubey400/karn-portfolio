
import React from 'react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Github, Instagram, MessageCircle, Twitch, Twitter } from 'lucide-react';

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
