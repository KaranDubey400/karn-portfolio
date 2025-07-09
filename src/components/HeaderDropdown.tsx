import React from 'react';
import { MoreVertical, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

const HeaderDropdown = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="fixed top-20 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-sm">
          <DropdownMenuItem onClick={toggleTheme}>
            {theme === 'dark' ? (
              <>
                <Sun className="mr-2 h-4 w-4" />
                Light Mode
              </>
            ) : (
              <>
                <Moon className="mr-2 h-4 w-4" />
                Dark Mode
              </>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuSeparator />
          
          <DropdownMenuItem onClick={() => window.open('https://github.com/KaranDubey400', '_blank')}>
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => window.open('https://www.linkedin.com/in/karan-dubey-600b59261/', '_blank')}>
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => window.open('mailto:karandubey2122@gmail.com', '_blank')}>
            <Mail className="mr-2 h-4 w-4" />
            Email
          </DropdownMenuItem>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DropdownMenuItem onClick={e => { e.stopPropagation(); setOpen(true); }}>
              About Me
            </DropdownMenuItem>
            <DialogContent className="bg-transparent border-none shadow-none p-0 flex justify-center items-center">
              <motion.div
                className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-2xl border transform-gpu max-w-2xl"
                style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'rotateX(5deg) rotateY(-5deg)',
                }}
                whileHover={{
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                animate={{
                  y: [0, -5, 0],
                  rotateX: [5, 2, 5],
                  rotateY: [-5, -2, -5],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="text-base text-muted-foreground whitespace-pre-line">
                  I'm a recent CS graduate actively looking for my first opportunity to put my skills to work.
                  
                  My primary language is C++, and I also use Python. Over the past 4 years, I've explored different tech stacks, built projects that brought out my creativity, and developed a solid understanding of computer science fundamentals. Every time I build something, I get more curious about how things work under the hood.
                  
                  Debugging can still suck — sometimes it takes hours — but that itch you get to make things work is real. I'm focused on improving so that what I write works well the first time. Learning new things has made me more adaptable, and solving real problems has helped me grow soft skills too — from patience to communication.
                  
                  I've also had the chance to connect with amazing people through tech communities. Talking to them has shaped my perspective, and I'm proud that I've been able to share mine too. I've even helped out on some cool projects — including one in blockchain — which made me super curious about that space.
                  
                  When I'm not coding or studying, you'll probably find me volunteering, reading a book, or geeking out over how video games are built.
                  
                  I'm genuinely excited to join a team where I can learn, grow, and make an impact.
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropdown;
