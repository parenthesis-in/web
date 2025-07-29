import React from 'react';
import { Code, Database, Cloud, Smartphone, Zap, Shield } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      name: 'Backend Development',
      icon: Code,
      technologies: ['Java', 'Spring Boot', 'Node.js', 'Python', 'FastAPI'],
      color: 'blue'
    },
    {
      name: 'Databases',
      icon: Database,
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Elasticsearch'],
      color: 'green'
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      technologies: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Jenkins'],
      color: 'purple'
    },
    {
      name: 'Frontend & Mobile',
      icon: Smartphone,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Native'],
      color: 'orange'
    },
    {
      name: 'AI & Machine Learning',
      icon: Zap,
      technologies: ['OpenAI', 'Rasa', 'Gemini AI', 'TensorFlow', 'Hugging Face'],
      color: 'red'
    },
    {
      name: 'Security & Payments',
      icon: Shield,
      technologies: ['OAuth 2.0', 'JWT', 'Payment Gateways', 'Encryption', 'SSL/TLS'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern, battle-tested technologies that power our open-source solutions
          </p>
        </div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses(category.color)}`}>
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>

                {/* Technologies List */}
                <div className="space-y-2">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture Philosophy */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Architecture Philosophy
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security First</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Every component is designed with security and privacy as core principles
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Optimized for speed, scalability, and efficient resource utilization
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cloud className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Native</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Built for modern cloud environments with containerization and microservices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;