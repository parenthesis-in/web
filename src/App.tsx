import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import TeamsPage from './pages/TeamsPage';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import OpenSourceLicense from './pages/OpenSourceLicense';
import AsteriskPage from './pages/projects/AsteriskPage';
import TriptiPage from './pages/projects/TriptiPage';
import DataBridgePage from './pages/projects/DataBridgePage';
import ParenthesisCaaSPage from './pages/projects/ParenthesisCaaSPage';

// Component to handle smooth scrolling to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return null;
};
function App() {
  return (
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/teams" element={<TeamsPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/license" element={<OpenSourceLicense />} />
                <Route path="/projects/asterisk" element={<AsteriskPage />} />
                <Route path="/projects/tripti" element={<TriptiPage />} />
                <Route path="/projects/databridge" element={<DataBridgePage />} />
                <Route path="/projects/parenthesis-caas" element={<ParenthesisCaaSPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
  );
}

export default App;