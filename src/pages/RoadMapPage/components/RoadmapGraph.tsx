import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Topic {
  id: string;
  title: string;
  subtopics: string[];
  x: number;
  y: number;
  connections: string[];
}

const topics: Topic[] = [
  {
    id: 'internet',
    title: 'Internet',
    subtopics: [
      'How does the internet work?',
      'What is HTTP?',
      'DNS and how it works',
      'Browsers and how they work',
    ],
    x: 50,
    y: 50,
    connections: ['html', 'css']
  },
  {
    id: 'html',
    title: 'HTML',
    subtopics: [
      'Learn the basics',
      'Writing semantic HTML',
      'Forms and validations',
      'Accessibility',
      'SEO basics'
    ],
    x: 250,
    y: 150,
    connections: ['css']
  },
  {
    id: 'css',
    title: 'CSS',
    subtopics: [
      'Learn the basics',
      'Making layouts',
      'Responsive design',
      'Flexbox',
      'Grid'
    ],
    x: 450,
    y: 250,
    connections: ['javascript']
  },
  // Add more topics...
];

export function RoadmapGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw connections
    ctx.strokeStyle = 'rgba(147, 51, 234, 0.3)';
    ctx.lineWidth = 2;

    topics.forEach(topic => {
      topic.connections.forEach(connectionId => {
        const connectedTopic = topics.find(t => t.id === connectionId);
        if (connectedTopic) {
          ctx.beginPath();
          ctx.moveTo(topic.x, topic.y);
          ctx.lineTo(connectedTopic.x, connectedTopic.y);
          ctx.stroke();
        }
      });
    });
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        width={1000}
        height={800}
      />
      
      {topics.map((topic) => (
        <motion.div
          key={topic.id}
          className="absolute"
          style={{ left: topic.x, top: topic.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg w-64">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {topic.title}
            </h3>
            <ul className="space-y-1">
              {topic.subtopics.map((subtopic) => (
                <li
                  key={subtopic}
                  className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2" />
                  {subtopic}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}