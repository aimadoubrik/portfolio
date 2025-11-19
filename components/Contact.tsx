import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');
    setErrors({});

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#0a0a0a] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
           <h2 className="text-4xl font-bold mb-6 flex items-center justify-center gap-3">
            <span className="text-accent-light dark:text-accent-dark font-mono text-2xl">04.</span> 
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-100 dark:border-dark-border"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black border ${errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:border-accent-light dark:focus:border-accent-dark focus:ring-1 focus:ring-accent-light outline-none transition-all`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
              </div>
              <div className="relative group">
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:border-accent-light dark:focus:border-accent-dark focus:ring-1 focus:ring-accent-light outline-none transition-all`}
                  placeholder="john@example.com"
                />
                 {errors.email && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
              </div>
            </div>

            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} focus:border-accent-light dark:focus:border-accent-dark focus:ring-1 focus:ring-accent-light outline-none transition-all resize-none`}
                placeholder="Hello, I'd like to discuss..."
              />
               {errors.message && <p className="absolute -bottom-5 left-0 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.message}</p>}
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`px-10 py-4 rounded-lg font-bold text-white flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 ${
                  status === 'success' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-slate-900 dark:bg-white dark:text-black hover:opacity-90'
                }`}
              >
                {status === 'submitting' && (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-black/30 dark:border-t-black rounded-full animate-spin" />
                )}
                {status === 'success' ? (
                  <>Sent Successfully! <CheckCircle className="w-5 h-5" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};