import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Calendar, Users, Star, GitFork, Code, Heart } from 'lucide-react';

const TeamsPage: React.FC = () => {
  const coreTeam = [
    {
      id: 1,
      name: 'Sagar Ved Bairwa',
      role: 'Founder & Lead Developer',
      bio: 'Passionate about building open-source solutions that bridge the gap between complex technology and practical applications. With expertise in distributed systems, AI, and payment technologies.',
      location: 'India',
      joinDate: '2024-01-01',
      avatar: 'https://avatars.githubusercontent.com/u/56448072?v=4',
      skills: ['Java', 'Spring Boot', 'React', 'System Architecture', 'AI/ML', 'Payment Systems'],
      social: {
        github: 'https://github.com/sagar-ved',
        linkedin: 'https://linkedin.com/in/sagarvedverma',
        twitter: 'https://twitter.com/sagarvedverma',
        email: 'sagarvedverma@gmail.com'
      },
      contributions: {
        commits: 1250,
        projects: 4,
        reviews: 89
      }
    }
  ];

  const contributors = [
    // {
    //   id: 1,
    //   name: 'Priya Sharma',
    //   role: 'Frontend Developer',
    //   location: 'Mumbai, India',
    //   avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['React', 'TypeScript', 'UI/UX Design'],
    //   contributions: { commits: 156, projects: 2 }
    // },
    // {
    //   id: 2,
    //   name: 'Rahul Kumar',
    //   role: 'Backend Developer',
    //   location: 'Bangalore, India',
    //   avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['Java', 'Spring Boot', 'Microservices'],
    //   contributions: { commits: 203, projects: 3 }
    // },
    // {
    //   id: 3,
    //   name: 'Anita Patel',
    //   role: 'DevOps Engineer',
    //   location: 'Pune, India',
    //   avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    //   contributions: { commits: 89, projects: 4 }
    // },
    // {
    //   id: 4,
    //   name: 'Vikram Singh',
    //   role: 'AI/ML Engineer',
    //   location: 'Delhi, India',
    //   avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['Python', 'TensorFlow', 'NLP', 'OpenAI'],
    //   contributions: { commits: 134, projects: 2 }
    // },
    // {
    //   id: 5,
    //   name: 'Sneha Reddy',
    //   role: 'Technical Writer',
    //   location: 'Hyderabad, India',
    //   avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['Technical Writing', 'Documentation', 'Content Strategy'],
    //   contributions: { commits: 67, projects: 4 }
    // },
    // {
    //   id: 6,
    //   name: 'Arjun Mehta',
    //   role: 'Security Engineer',
    //   location: 'Chennai, India',
    //   avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    //   skills: ['Cybersecurity', 'Penetration Testing', 'Compliance'],
    //   contributions: { commits: 92, projects: 3 }
    // }
  ];

  const teamStats = [
    { label: 'Core Team Members', value: '1', icon: Users },
    { label: 'Active Contributors', value: '6+', icon: Code },
    { label: 'Total Commits', value: '2K+', icon: GitFork },
    { label: 'Projects Maintained', value: '4', icon: Star }
  ];

  const openRoles = [
    {
      title: 'Senior Backend Developer',
      type: 'Full-time',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Payment Systems'],
      description: 'Help build and scale our distributed payment gateway system.'
    },
    {
      title: 'Frontend Developer',
      type: 'Part-time',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
      description: 'Create beautiful and intuitive user interfaces for our platforms.'
    },
    {
      title: 'DevOps Engineer',
      type: 'Contract',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Monitoring'],
      description: 'Improve our deployment pipelines and infrastructure automation.'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the passionate individuals building the future of open-source technology in India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Team Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center"
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

        {/* Core Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Core Team
          </h2>
          <div className="grid lg:grid-cols-1 gap-8">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-blue-100 dark:border-blue-900"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {member.bio}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{member.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>Joined {new Date(member.joinDate).getFullYear()}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Skills</h4>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contributions */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {member.contributions.commits}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Commits</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {member.contributions.projects}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {member.contributions.reviews}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Reviews</div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Contributors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor) => (
              <div
                key={contributor.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-gray-200 dark:border-gray-600"
                />
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {contributor.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {contributor.role}
                </p>
                <div className="flex items-center justify-center space-x-1 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <MapPin size={12} />
                  <span>{contributor.location}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap justify-center gap-1">
                    {contributor.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contributions */}
                <div className="flex justify-center space-x-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {contributor.contributions.commits}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white">
                      {contributor.contributions.projects}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-xs">Projects</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Join Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {openRoles.map((role, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {role.title}
                  </h3>
                  <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                    {role.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {role.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Required Skills:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="text-white" size={24} />
              <h2 className="text-2xl font-bold">Want to Contribute?</h2>
            </div>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate developers, designers, writers, and contributors 
              to join our open-source community. Every contribution, big or small, makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/sagarvedbairwa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                View Projects
              </a>
              <a
                href="mailto:parenthesis-in+careers@gmail.com"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;