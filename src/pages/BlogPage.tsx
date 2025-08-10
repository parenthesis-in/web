import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, BookOpen, Search, Tag, Clock, ExternalLink, Loader } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  published: string;
  updated: string;
  url: string;
  author: {
    displayName: string;
    image?: {
      url: string;
    };
  };
  labels?: string[];
  images?: {
    url: string;
  }[];
}

interface BloggerResponse {
  items: BlogPost[];
  nextPageToken?: string;
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bloggerBlogId, setBloggerBlogId] = useState('');
  const [bloggerApiKey, setBloggerApiKey] = useState('');

  // Configuration - Replace with your actual Blogger blog ID and API key
  const BLOGGER_BLOG_ID = bloggerBlogId || 'YOUR_BLOGGER_BLOG_ID';
  const BLOGGER_API_KEY = bloggerApiKey || 'YOUR_BLOGGER_API_KEY';

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if configuration is set
      if (BLOGGER_BLOG_ID === 'YOUR_BLOGGER_BLOG_ID' || BLOGGER_API_KEY === 'YOUR_BLOGGER_API_KEY') {
        // Use fallback static data if Blogger is not configured
        setBlogPosts(getFallbackPosts());
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/${BLOGGER_BLOG_ID}/posts?key=${BLOGGER_API_KEY}&maxResults=20&fetchImages=true&fetchBodies=true`
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch blog posts: ${response.statusText}`);
      }

      const data: BloggerResponse = await response.json();
      
      if (data.items) {
        const processedPosts = data.items.map(post => ({
          ...post,
          excerpt: extractExcerpt(post.content),
          readTime: calculateReadTime(post.content)
        }));
        setBlogPosts(processedPosts);
      } else {
        setBlogPosts([]);
      }
    } catch (err) {
      console.error('Error fetching blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
      // Use fallback data on error
      setBlogPosts(getFallbackPosts());
    } finally {
      setLoading(false);
    }
  };

  const extractExcerpt = (content: string): string => {
    // Remove HTML tags and get first 200 characters
    const textContent = content.replace(/<[^>]*>/g, '');
    return textContent.length > 200 ? textContent.substring(0, 200) + '...' : textContent;
  };

  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const textContent = content.replace(/<[^>]*>/g, '');
    const wordCount = textContent.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const getImageFromPost = (post: BlogPost): string => {
    // Try to get image from post images
    if (post.images && post.images.length > 0) {
      return post.images[0].url;
    }
    
    // Try to extract image from content
    const imgMatch = post.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) {
      return imgMatch[1];
    }
    
    // Fallback to a default image based on category or use Pexels
    const fallbackImages = [
      'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    ];
    
    return fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
  };

  const getFallbackPosts = (): BlogPost[] => {
    return [
      {
        id: '1',
        title: 'Building Distributed Payment Systems in India',
        content: '<p>Exploring the challenges and solutions for creating robust payment gateways that serve millions of users across diverse network conditions and regulatory requirements.</p>',
        excerpt: 'Exploring the challenges and solutions for creating robust payment gateways that serve millions of users across diverse network conditions and regulatory requirements.',
        published: '2024-12-15T10:00:00Z',
        updated: '2024-12-15T10:00:00Z',
        url: '#',
        author: {
          displayName: 'Sagar Ved Bairwa'
        },
        labels: ['Payments', 'Distributed Systems', 'Fintech', 'Open Source'],
        images: [{
          url: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
        }]
      },
      {
        id: '2',
        title: 'Open Source AI: Making Intelligence Accessible',
        content: '<p>How open-source AI frameworks are democratizing artificial intelligence and enabling startups to compete with tech giants in the Indian market.</p>',
        excerpt: 'How open-source AI frameworks are democratizing artificial intelligence and enabling startups to compete with tech giants in the Indian market.',
        published: '2024-12-10T10:00:00Z',
        updated: '2024-12-10T10:00:00Z',
        url: '#',
        author: {
          displayName: 'Sagar Ved Bairwa'
        },
        labels: ['AI', 'Machine Learning', 'Open Source', 'Technology'],
        images: [{
          url: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800'
        }]
      },
      {
        id: '3',
        title: 'Microservices Architecture for Indian Startups',
        content: '<p>A practical guide to implementing microservices architecture while managing costs and complexity for growing Indian businesses.</p>',
        excerpt: 'A practical guide to implementing microservices architecture while managing costs and complexity for growing Indian businesses.',
        published: '2024-12-05T10:00:00Z',
        updated: '2024-12-05T10:00:00Z',
        url: '#',
        author: {
          displayName: 'Sagar Ved Bairwa'
        },
        labels: ['Microservices', 'Architecture', 'Startups', 'Technology'],
        images: [{
          url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800'
        }]
      }
    ];
  };

  const categories = React.useMemo(() => {
    const allLabels = blogPosts.flatMap(post => post.labels || []);
    const uniqueLabels = Array.from(new Set(allLabels));
    
    return [
      { id: 'all', name: 'All Posts', count: blogPosts.length },
      ...uniqueLabels.map(label => ({
        id: label.toLowerCase().replace(/\s+/g, '-'),
        name: label,
        count: blogPosts.filter(post => post.labels?.includes(label)).length
      }))
    ];
  }, [blogPosts]);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.labels && post.labels.some(label => label.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'all' || 
                           (post.labels && post.labels.some(label => 
                             label.toLowerCase().replace(/\s+/g, '-') === selectedCategory
                           ));
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0]; // Use the first post as featured
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader className="animate-spin text-blue-600 dark:text-blue-400 mx-auto mb-4" size={48} />
          <p className="text-gray-600 dark:text-gray-300">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Insights & Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts on open-source development, system architecture, fintech, and the future 
            of technology in India
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Configuration Notice */}
        {(BLOGGER_BLOG_ID === 'YOUR_BLOGGER_BLOG_ID' || BLOGGER_API_KEY === 'YOUR_BLOGGER_API_KEY') && (
          <div className="mb-8 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Note:</strong> Blogger integration is not configured. Showing sample posts. 
              To connect your Blogger feed, update the BLOGGER_BLOG_ID and BLOGGER_API_KEY in the code.
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <p className="text-red-800 dark:text-red-200">{error}</p>
            <button
              onClick={fetchBlogPosts}
              className="mt-2 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && !searchTerm && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Featured Article</h2>
            <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={getImageFromPost(featuredPost)}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    {featuredPost.labels && featuredPost.labels.length > 0 && (
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {featuredPost.labels[0]}
                      </span>
                    )}
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(featuredPost.published).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        By {featuredPost.author.displayName}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {calculateReadTime(featuredPost.content)}
                      </span>
                    </div>
                    <a
                      href={featuredPost.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <span>Read More</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(selectedCategory === 'all' && !searchTerm ? regularPosts : filteredPosts).map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group"
            >
              <img
                src={getImageFromPost(post)}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3">
                  {post.labels && post.labels.length > 0 && (
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                      {post.labels[0]}
                    </span>
                  )}
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Clock size={14} className="mr-1" />
                    {calculateReadTime(post.content)}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.labels?.slice(0, 3).map((label) => (
                    <span
                      key={label}
                      className="flex items-center space-x-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      <Tag size={10} />
                      <span>{label}</span>
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.published).toLocaleDateString()}
                  </div>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Read</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified when we publish new insights about open-source development, 
            system architecture, and tech innovations in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Configuration Instructions */}
        {(BLOGGER_BLOG_ID === 'YOUR_BLOGGER_BLOG_ID' || BLOGGER_API_KEY === 'YOUR_BLOGGER_API_KEY') && (
          <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              How to Connect Your Blogger Feed
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <p><strong>Step 1:</strong> Get your Blogger Blog ID from your blog's URL or Blogger dashboard</p>
              <p><strong>Step 2:</strong> Create a Google API key with Blogger API v3 enabled</p>
              <p><strong>Step 3:</strong> Replace 'YOUR_BLOGGER_BLOG_ID' and 'YOUR_BLOGGER_API_KEY' in the code</p>
              <p><strong>Step 4:</strong> The page will automatically fetch and display your latest blog posts</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;