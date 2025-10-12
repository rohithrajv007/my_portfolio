import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoadingAnimation from './components/LoadingAnimation';
import './index.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = (page) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const renderPage = () => {
    if (isLoading) return <LoadingAnimation />;
    
    if (currentPage === 'home') return <HomePage navigateTo={navigateTo} />;
    if (currentPage === 'projects') return <ProjectsPage navigateTo={navigateTo} />;
    if (currentPage === 'about') return <AboutPage />;
    if (currentPage === 'contact') return <ContactPage />;
    if (currentPage.startsWith('project-')) {
      const projectId = parseInt(currentPage.split('-')[1]);
      return <ProjectDetailPage projectId={projectId} navigateTo={navigateTo} />;
    }
    return <HomePage navigateTo={navigateTo} />;
  };

  return (
    <div className="bg-slate-950 text-white overflow-hidden min-h-screen">
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      {renderPage()}
      <Footer />
    </div>
  );
}