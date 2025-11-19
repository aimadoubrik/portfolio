import React from 'react';
import { Code2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
          <Code2 className="w-6 h-6 text-accent-light dark:text-accent-dark" />
          <span>DEV.IO</span>
        </div>
        
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Designed & Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> and Gemini
        </p>
        
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Alex Dev. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
