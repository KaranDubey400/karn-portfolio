import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import TypewriterText from './TypewriterText';
import SocialsDropdown from './SocialsDropdown';

const ResumeHero = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  const handleMyReadsClick = () => {
    navigate('/my-reads');
  };

  const handleCodingProfilesClick = () => {
    navigate('/coding-profiles');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Personal Info */}
          <motion.div 
            className="flex flex-col items-start text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 leading-tight">
                KARAN DUBEY
              </h1>
              <div className="bg-black text-green-400 font-mono text-sm p-3 rounded border mt-4 max-w-fit">
                <span className="text-green-500">$</span>{' '}
                <TypewriterText 
                  text={["CS Grad 2025", "Open to job opportunities."]}
                  speed={50}
                  delay={2000}
                  loop={true}
                />
              </div>
            </motion.div>
            
            {/* Floating 3D Postcard */}
            <motion.div
              className="mt-6 perspective-1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <motion.div
                className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-2xl border transform-gpu"
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
                <p className="text-lg text-muted-foreground italic whitespace-pre-line">
                  C++ & Python | Data Structures & Problem Solving
                  {"\n"}
                  I'm a recent CS graduate actively looking for my first opportunity to put my skills to work. Just a guy who loves tech, building cool stuff, and learning through trial and error. Not perfect, but consistent. I enjoy writing code that makes sense — to both users and devs.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4 pt-6 w-full flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <a href="https://github.com/KaranDubey400" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/karan-dubey-600b59261/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:karandubey2122@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
                <span>karandubey2122@gmail.com</span>
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-4 pt-6 w-full flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <SocialsDropdown />
              <Button 
                onClick={handleMyReadsClick}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                My Reads
              </Button>
              <Button 
                onClick={handleCodingProfilesClick}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Coding Profiles
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Picture */}
          <motion.div
            className="relative max-w-lg w-full mx-auto md:ml-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative z-10 overflow-hidden">
              <motion.div
                className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="/lovable-uploads/9b9b2c6a-8892-4520-8407-982272e41fc3.png"
                  alt="Karan Dubey - Profile Picture"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/30 -z-10 translate-x-5 translate-y-5"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeHero;
