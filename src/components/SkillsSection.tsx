
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skills = [
    {
      category: "Languages & Libraries",
      icon: <Code className="h-10 w-10 text-primary" />,
      items: ["C++", "Python", "SQL", "HTML", "React JS", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Tools & Database",
      icon: <Database className="h-10 w-10 text-primary" />,
      items: ["VS Code", "GitHub", "Firebase", "Supabase", "Vite", "MongoDB"]
    },
    {
      category: "Concepts",
      icon: <Terminal className="h-10 w-10 text-primary" />,
      items: ["Data Structures & Algorithms", "Object Oriented Programming", "Operating System", "Database Management"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            variants={itemVariants}
          >
            Skills & Expertise
          </motion.h2>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                className="bg-card rounded-lg p-6 border border-border/50 hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold mt-4">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {skillGroup.items.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
