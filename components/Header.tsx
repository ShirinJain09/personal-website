
import React from 'react';

interface HeaderProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onToggleMobileMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleDarkMode, isDarkMode, onToggleMobileMenu }) => {
  return (
    <header className="fixed top-0 z-50 w-full h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-6 transition-colors">
      <div className="flex items-center space-x-3 md:space-x-4">
        <button 
          onClick={onToggleMobileMenu}
          className="md:hidden p-2 -ml-2 text-slate-500 hover:text-primary"
        >
          <span className="material-icons">menu</span>
        </button>
        <div className="flex items-center space-x-2">
          <span className="material-icons text-primary hidden sm:inline">description</span>
          <span className="font-bold text-sm md:text-lg tracking-tight">PRD_v2026.1</span>
        </div>
        <div className="hidden lg:flex items-center space-x-2 text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
          <span className="text-slate-500 uppercase">Status:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5 animate-pulse"></span>
            Open
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-6">
        <div className="hidden xl:flex items-center space-x-4 text-sm text-slate-500">
          <span><strong className="text-slate-900 dark:text-white">Owner:</strong> Shirin Jain</span>
          <span><strong className="text-slate-900 dark:text-white">Updated:</strong> Feb 2025</span>
        </div>
        
        <button 
          onClick={onToggleDarkMode}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
          title="Toggle Dark Mode"
        >
          <span className="material-icons text-lg md:text-xl">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <button className="bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-1 md:space-x-2 shadow-lg shadow-primary/20">
          <span className="material-icons text-xs md:text-sm">rocket_launch</span>
          <span>Ship</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
