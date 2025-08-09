import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: '/blog' }
  ];

  const projects = [
    { label: 'Asterisk', href: '#' },
    { label: 'DataBridge', href: '#' },
    { label: 'TRIPTI AI', href: '#' },
    { label: 'Parenthesis CaaS', href: '#' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sagarvedbairwa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sagarvedbairwa', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/sagarvedbairwa', label: 'Twitter' },
    { icon: Mail, href: 'mailto:sagar@parenthesisindia.com', label: 'Email' }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#') && window.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      window.location.href = '/' + href;
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Parenthesis <span className="text-blue-400">India</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering India through open-source technology. Building platforms for 
              data integration, AI services, and digital payments that transform how 
              businesses and developers work.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 p-2 rounded-lg transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Projects</h4>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.label}>
                  <a
                    href={project.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {project.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400">
            <span>© {currentYear} Parenthesis India | Created with</span>
            <Heart className="text-red-500" size={16} />
            <span>by Sagar Ved Bairwa</span>
          </div>

          {/* Additional Links */}
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/license" className="hover:text-blue-400 transition-colors duration-200">
              Open Source License
            </Link>
          </div>
        </div>

        {/* Open Source Badge */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800 px-4 py-2 rounded-full text-sm text-gray-300">
            <Github size={16} />
            <span>Proudly Open Source</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;