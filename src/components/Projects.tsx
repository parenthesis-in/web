import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, CreditCard, Database, Bot, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      name: 'Asterisk',
      description: 'Distributed Payment Gateway',
      fullDescription: 'A robust, scalable payment gateway system designed for Indian businesses. Features multi-provider support, real-time transaction processing, and comprehensive fraud detection.',
      icon: CreditCard,
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Redis', 'Kafka'],
      github: 'https://github.com/sagarvedbairwa/asterisk',
      demo: '#',
      detailsPath: '/projects/asterisk',
      status: 'Active Development',
      color: 'blue'
    },
    {
      name: 'DataBridge',
      description: 'IAM + Integration Platform',
      fullDescription: 'A comprehensive Identity and Access Management platform with data integration capabilities. Simplifies user management and data flow across multiple systems.',
      icon: Database,
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'Docker', 'Kubernetes'],
      github: 'https://github.com/sagarvedbairwa/databridge',
      demo: '#',
      detailsPath: '/projects/databridge',
      status: 'Beta',
      color: 'purple'
    },
    {
      name: 'TRIPTI AI',
      description: 'AI Chatbot for Travel',
      fullDescription: 'An intelligent travel assistant powered by advanced AI. Helps users plan trips, find accommodations, and get personalized travel recommendations.',
      icon: Bot,
      technologies: ['Python', 'OpenAI', 'Rasa', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/sagarvedbairwa/tripti-ai',
      demo: '#',
      detailsPath: '/projects/tripti',
      status: 'Live',
      color: 'green'
    },
    {
      name: 'Parenthesis CaaS',
      description: 'Chatbot as a Service',
      fullDescription: 'A comprehensive platform for building, deploying, and managing chatbots. Offers easy integration, analytics, and customization options for businesses.',
      icon: MessageSquare,
      technologies: ['Node.js', 'React', 'Gemini AI', 'WebSocket', 'Docker'],
      github: 'https://github.com/sagarvedbairwa/parenthesis-caas',
      demo: '#',
      detailsPath: '/projects/parenthesis-caas',
      status: 'Coming Soon',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-100 dark:bg-blue-900',
        text: 'text-blue-600 dark:text-blue-400',
        border: 'border-blue-200 dark:border-blue-700',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'bg-purple-100 dark:bg-purple-900',
        text: 'text-purple-600 dark:text-purple-400',
        border: 'border-purple-200 dark:border-purple-700',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      green: {
        bg: 'bg-green-100 dark:bg-green-900',
        text: 'text-green-600 dark:text-green-400',
        border: 'border-green-200 dark:border-green-700',
        button: 'bg-green-600 hover:bg-green-700'
      },
      orange: {
        bg: 'bg-orange-100 dark:bg-orange-900',
        text: 'text-orange-600 dark:text-orange-400',
        border: 'border-orange-200 dark:border-orange-700',
        button: 'bg-orange-600 hover:bg-orange-700'
      }
    };
    return colors[color as keyof typeof colors];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Beta':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Active Development':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Innovative open-source solutions designed to transform how businesses 
            handle payments, data integration, and AI services
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            const IconComponent = project.icon;

            return (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
              >
                {/* Project Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <IconComponent className={colors.text} size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className={`text-lg font-semibold ${colors.text} mb-3`}>
                    {project.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.fullDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col space-y-3">
                    <Link
                      to={project.detailsPath}
                      className={`flex items-center justify-center space-x-2 px-4 py-2 ${colors.button} text-white rounded-lg transition-colors duration-200`}
                    >
                      <span>View Details</span>
                    </Link>
                    <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200 flex-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors duration-200 flex-1"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to Contribute?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              All our projects are open-source and welcome contributions from developers 
              worldwide. Join our community and help build the future of Indian technology.
            </p>
            <a
              href="https://github.com/parenthesis-in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <Github size={20} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;