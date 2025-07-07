import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, Trophy, Target, Brain, Zap, Grid3X3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const CodingProfiles = () => {
  const navigate = useNavigate();

  const codingPlatforms = [
    {
      name: 'LeetCode',
      username: 'karan_dubey',
      description: 'Algorithm and Data Structure Problems',
      icon: Code,
      url: 'https://leetcode.com/u/karandubey/',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Coding Ninjas',
      username: 'karan_dubey',
      description: 'Comprehensive Programming Practice',
      icon: Trophy,
      url: 'https://www.naukri.com/code360/profile/3dd1ff5b-049e-4b2c-96dd-94dea822f7d0',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Grind 75',
      username: 'karan_dubey',
      description: 'Curated Coding Problems Collection',
      icon: Grid3X3,
      url: 'https://www.techinterviewhandbook.org/grind75/?weeks=20',
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Codeforces',
      username: 'karan_dubey',
      description: 'Competitive Programming Platform',
      icon: Target,
      url: 'https://codeforces.com/profile/Karn_DubEy_',
      color: 'from-red-400 to-red-600'
    },
    {
      name: 'CodeChef',
      username: 'karan_dubey',
      description: 'Competitive Programming & Contests',
      icon: Brain,
      url: 'https://codechef.com/users/karan_dubey',
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Codlio',
      username: 'karan_dubey',
      description: 'Modern Coding Practice',
      icon: Zap,
      url: 'https://codolio.com/profile/karn_dubey/card',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Coding Profiles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my journey across various competitive programming and coding practice platforms
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {codingPlatforms.map((platform, index) => (
              <motion.div
                key={`${platform.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => window.open(platform.url, '_blank')}
              >
                <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:scale-105 transform flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center flex-shrink-0`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-muted-foreground mb-2">
                      {platform.description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      @{platform.username}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
