
import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PortfolioContent from './components/PortfolioContent';
import ContactFab from './components/ContactFab';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      <Header 
        onToggleDarkMode={toggleDarkMode} 
        isDarkMode={isDarkMode} 
        onToggleMobileMenu={toggleMobileMenu}
      />
      
      <div className="pt-16 flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div 
              className="w-72 h-full bg-white dark:bg-slate-900 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-slate-800">
                <span className="font-bold text-primary">NAVIGATION</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="material-icons text-slate-400">close</span>
                </button>
              </div>
              <Sidebar onNavClick={() => setIsMobileMenuOpen(false)} />
            </div>
          </div>
        )}

        <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-4 md:p-12">
          <PortfolioContent />
        </main>
      </div>

      <ContactFab />
    </div>
  );
};

export default App;
