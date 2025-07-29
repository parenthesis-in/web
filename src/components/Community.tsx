import React from 'react';
import { Github, Users, GitFork, Star, MessageCircle, Heart } from 'lucide-react';

const Community: React.FC = () => {
  const stats = [
    { label: 'Contributors', value: '50+', icon: Users },
    { label: 'GitHub Stars', value: '1.2K+', icon: Star },
    { label: 'Forks', value: '200+', icon: GitFork },
    { label: 'Issues Resolved', value: '300+', icon: MessageCircle }
  ];

  const contributionAreas = [
    {
      title: 'Code Contributions',
      description: 'Help us build and improve our open-source projects',
      icon: Github,
      tasks: ['Bug fixes', 'Feature development', 'Code reviews', 'Testing']
    },
    {
      title: 'Documentation',
      description: 'Improve docs, tutorials, and developer guides',
      icon: MessageCircle,
      tasks: ['API documentation', 'Tutorials', 'Code examples', 'Translations']
    },
    {
      title: 'Community Support',
      description: 'Help other developers and users in our community',
      icon: Heart,
      tasks: ['Answer questions', 'Mentoring', 'Community events', 'Social media']
    }
  ];

  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Be part of a growing community of developers building the future of open-source 
            technology in India
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center border border-gray-200 dark:border-gray-700"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Contribution Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contributionAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.title}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                      <span className="text-sm">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Getting Started */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Contribute?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're a seasoned developer or just starting out, there's a place for you 
              in our community. Let's build something amazing together!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/sagarvedbairwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <Github size={20} />
                <span>View Projects</span>
              </a>
              <a
                href="mailto:sagar@parenthesisindia.com"
                className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                <MessageCircle size={20} />
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Community Guidelines
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Be Respectful</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Treat everyone with respect and kindness, regardless of their background or experience level
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Share Knowledge</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Help others learn and grow by sharing your expertise and experiences
              </p>
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Collaborate</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Work together to build amazing solutions that benefit the entire community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;