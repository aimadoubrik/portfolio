import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { BookOpen, X, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';

export const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-white dark:bg-black transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
           {!activePost ? (
             <motion.div
               key="list"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0, x: -20 }}
               transition={{ duration: 0.5 }}
             >
               <h2 className="text-4xl font-bold mb-16 flex items-center gap-3">
                <span className="text-accent-light dark:text-accent-dark font-mono text-2xl">03.</span> 
                Latest Articles
              </h2>
              <div className="space-y-12">
                {BLOG_POSTS.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onClick={() => setActivePost(post)}
                    className="group cursor-pointer border-l-2 border-slate-200 dark:border-slate-800 hover:border-accent-light dark:hover:border-accent-dark pl-8 transition-all duration-300 py-2"
                  >
                    <div className="flex items-center gap-4 text-xs text-accent-light dark:text-accent-dark mb-3 font-mono uppercase tracking-wider">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-accent-light dark:text-accent-dark text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                      Read Article <BookOpen className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>
             </motion.div>
           ) : (
             <motion.div
              key="post"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 dark:bg-dark-card p-8 md:p-12 rounded-2xl border border-slate-200 dark:border-dark-border shadow-2xl"
             >
               <button 
                onClick={() => setActivePost(null)}
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-accent-light mb-8 group"
               >
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to list
               </button>
               
               <h1 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">{activePost.title}</h1>
               <div className="flex items-center gap-4 text-sm text-accent-light dark:text-accent-dark mb-10 font-mono border-b border-slate-200 dark:border-slate-700 pb-8 uppercase tracking-wide">
                  <span>{activePost.date}</span>
                  <span>•</span>
                  <span>{activePost.readTime}</span>
               </div>

               <article className="prose dark:prose-invert prose-lg max-w-none prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-slate-700 font-sans">
                 <ReactMarkdown>{activePost.content}</ReactMarkdown>
               </article>
             </motion.div>
           )}
        </AnimatePresence>
      </div>
    </section>
  );
};