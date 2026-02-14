
import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { id: 'summary', label: 'Executive Summary', number: '1.0' },
  { id: 'experience', label: 'Problem Space (Experience)', number: '2.0' },
  { id: 'projects', label: 'Proposed Solutions (Projects)', number: '3.0' },
  { id: 'kpis', label: 'Success Metrics (KPIs)', number: '4.0' },
  { id: 'hobbies', label: 'Non-Functional Requirements', number: '5.0' },
  { id: 'appendix', label: 'Appendix', number: '6.0' },
];

interface SidebarProps {
  onNavClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (onNavClick) onNavClick();
    }
  };

  return (
    <aside className="w-full md:w-72 sticky top-16 md:sticky-sidebar border-r-0 md:border-r border-slate-200 dark:border-slate-800 p-6 overflow-y-auto bg-white dark:bg-slate-900 transition-colors h-full">
      <nav className="space-y-8">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Table of Contents</h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors group font-medium cursor-pointer" 
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <span className="text-xs font-mono group-hover:text-primary/60">{item.number}</span>
                  <span className="group-hover:underline text-sm md:text-base">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Stakeholders</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-[10px] font-mono">RECRUITERS</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-[10px] font-mono">CTOs</span>
            <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-[10px] font-mono">DESIGN_LEADS</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
