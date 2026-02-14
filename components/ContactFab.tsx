
import React from 'react';

const ContactFab: React.FC = () => {
  const email = "shirinjain90@gmail.com";

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end space-y-4 z-40">
      <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-full p-1.5 md:p-2 border border-slate-200 dark:border-slate-700 flex items-center space-x-2">
        <a 
          href={`mailto:${email}`}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          title="Send an Email"
        >
          <span className="material-icons text-lg md:text-xl">mail</span>
        </a>
        <a 
          href={`mailto:${email}`}
          className="px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary text-white font-bold text-[10px] md:text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95 whitespace-nowrap flex items-center justify-center"
        >
          Contact Owner
        </a>
      </div>
    </div>
  );
};

export default ContactFab;
