import React from 'react';
import { Target, Eye, Heart, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Parenthesis India
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A technology initiative focused on building open-source solutions that empower 
            developers and businesses across India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg flex-shrink-0">
                <Eye className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  To democratize technology access across India by building open-source platforms 
                  that solve real-world problems in payments, data integration, and AI services.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg flex-shrink-0">
                <Target className="text-purple-600 dark:text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create robust, scalable, and accessible technology solutions that empower 
                  developers, startups, and enterprises to build innovative products without 
                  barriers to entry.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg flex-shrink-0">
                <Heart className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Values</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transparency, community collaboration, innovation, and accessibility. 
                  We believe in building technology that serves everyone, not just a privileged few.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Founder */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Sagar Ved Bairwa
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                Founder & Lead Developer
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Passionate about building open-source solutions that bridge the gap between 
                complex technology and practical applications. With expertise in distributed 
                systems, AI, and payment technologies, Sagar leads the vision of making 
                advanced tech accessible to all.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/sagarvedbairwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  GitHub Profile
                </a>
                <a
                  href="https://linkedin.com/in/sagarvedbairwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Open Source Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Open Source by Design
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Every project under Parenthesis India is built with open-source principles. 
              We believe in transparency, community contributions, and shared knowledge. 
              Our code is freely available, well-documented, and designed to be extended 
              by developers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;