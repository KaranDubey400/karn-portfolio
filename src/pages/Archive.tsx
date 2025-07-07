
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Code, ExternalLink, Archive } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  date: string;
  description: string[];
  tech: string[];
  link: string;
  color: string;
}

const ArchivePage = () => {
  const navigate = useNavigate();

  const archiveProjects: Project[] = [
    {
      id: 1,
      title: 'Craftify- AI powered Resume Optimizer',
      date: 'Jan 2024',
      description: [
        'Its a resume optimizer tool which uses NLP techniques (Spacy, NLTK), built using Python.',
        'It takes resume and compares against job description and gives feedback to user, so they can tailor their resume according to the job description and apply.',
        'There is authentication system implemented, using Firebase to make it secure.',
        'Job listings will be added to this.'
      ],
      tech: ['Python', 'Streamlit', 'NLP', 'Firebase'],
      link: 'https://ai-powered-resume-optimizerr-ef4tjgywy9s5jrt2mgcrye.streamlit.app/',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Sorting Algorithm Visualizer',
      date: 'Nov 2023',
      description: [
        'Built real time visualizations for 5 popular sorting algorithms.',
        'Used TypeScript and Vite in this project, and styled using Tailwind CSS.',
        'It is deployed on GitHub and hosted on Vercel.'
      ],
      tech: ['TypeScript', 'Vite', 'Tailwind CSS', 'Algorithms'],
      link: 'https://sorting-visualizer-two-sepia.vercel.app/',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Pomodoro Productivity App',
      date: 'Aug 2023',
      description: [
        'This project I made for my personal use, I utilize Pomodoro technique while studying and it has helped me a lot, so I needed this.',
        'I designed and implemented a customizable 25/5 Pomodoro timer using Vite and TypeScript.',
        'Hosted on Vercel, deployed on GitHub.',
        'Later I will include study music in this platform.'
      ],
      tech: ['TypeScript', 'Vite', 'Tailwind CSS'],
      link: 'https://pomodoro-productivity-app.vercel.app/',
      color: 'bg-red-500'
    }
  ];

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

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="flex items-center mb-12"
            variants={itemVariants}
          >
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="mr-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
            <Archive size={36} className="text-primary mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold">Project Archive</h1>
          </motion.div>

          <motion.div 
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-lg font-medium">Open to opportunities</p>
              <p className="text-muted-foreground">2025 grad computer science</p>
              <p className="text-muted-foreground">Problem solver</p>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
          >
            {archiveProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className={`h-2 ${project.color}`}></div>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {project.description.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <p className="text-sm">{point}</p>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-muted rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline mt-4"
                      >
                        View Project <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArchivePage;
