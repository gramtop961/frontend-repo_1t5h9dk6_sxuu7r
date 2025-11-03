import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-black/40 border-b border-black/5 dark:border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="relative">
              <motion.span
                initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-indigo-500/20"
              >
                <Rocket className="h-5 w-5 text-white" />
              </motion.span>
              <span className="absolute inset-0 -z-10 blur-xl bg-indigo-500/20 rounded-xl" />
            </div>
            <span className="font-semibold tracking-tight text-gray-900 dark:text-white text-lg">
              LuxeVibe
            </span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Showcase</a>
            <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-semibold shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 transition-all"
            >
              Get Started <Star className="h-4 w-4" />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-900/5 dark:hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2 py-3">
              <a href="#features" className="px-2 py-2 rounded-md hover:bg-gray-900/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300">Features</a>
              <a href="#showcase" className="px-2 py-2 rounded-md hover:bg-gray-900/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300">Showcase</a>
              <a href="#contact" className="px-2 py-2 rounded-md hover:bg-gray-900/5 dark:hover:bg-white/5 text-gray-700 dark:text-gray-300">Contact</a>
              <a href="#cta" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-semibold shadow-lg shadow-gray-900/10">Get Started</a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
