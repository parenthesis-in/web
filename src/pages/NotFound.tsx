import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Github, Mail, AlertTriangle } from 'lucide-react';

const NotFound: React.FC = () => {
  const popularPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Return to homepage' },
    { name: 'Projects', path: '/#projects', icon: Github, description: 'View our open-source projects' },
    { name: 'Teams', path: '/teams', icon: Search, description: 'Meet our team members' },
    { name: 'Blog', path: '/blog', icon: Search, description: 'Read our latest insights' },
    { name: 'Contact', path: '/#contact', icon: Mail, description: 'Get in touch with us' }
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      window.location.href = path;
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="relative">
            {/* Large 404 Text */}
            <div className="text-8xl sm:text-9xl font-bold text-gray-200 dark:text-gray-800 select-none">
              404
            </div>
            
            {/* Alert Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-full">
                <AlertTriangle className="text-orange-600 dark:text-orange-400" size={48} />
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers encounter 404s!
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Let's get you back on track with some helpful links below.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            to="/"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Home size={20} />
            <span>Go Home</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Popular Pages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Popular Pages
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPages.map((page) => {
              const IconComponent = page.icon;
              return (
                <div key={page.name}>
                  {page.path.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavClick(page.path)}
                      className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {page.description}
                      </p>
                    </button>
                  ) : (
                    <Link
                      to={page.path}
                      className="block w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 group"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {page.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {page.description}
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you believe this is an error or you were expecting to find something here, 
            please let us know so we can fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              onClick={() => handleNavClick('/#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Support
            </Link>
            <a
              href={import.meta.env.VITE_GITHUB_URL || 'https://github.com/sagarvedbairwa'}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Report Issue
            </a>
          </div>
        </div>

        {/* Fun Message */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            💡 <strong>Developer Tip:</strong> This 404 page is also open-source! 
            Check out our GitHub to see how it's built.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;