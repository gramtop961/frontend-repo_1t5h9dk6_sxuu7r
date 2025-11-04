import React, { useState } from 'react';
import { Home, Phone, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Главная', href: '#home', icon: Home },
  { label: 'Объекты', href: '#properties', icon: Star },
  { label: 'Контакты', href: '#contact', icon: Phone },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            {/* Brand */}
            <a href="#home" className="group relative inline-flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-lg shadow-fuchsia-500/20">
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-xl font-black tracking-tight"
                >
                  N
                </motion.div>
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_35%)]" />
              </div>
              <div>
                <div className="text-sm font-medium text-white/60">НУР AGENCY</div>
                <div className="-mt-0.5 text-lg font-semibold tracking-wide">Луч элитной недвижимости</div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 md:flex">
              {navItems.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/80 transition hover:text-white"
                >
                  <Icon className="h-4 w-4 text-white/50 transition group-hover:text-white" />
                  <span>{label}</span>
                  <span className="ml-2 h-px w-6 origin-left scale-x-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 transition group-hover:scale-x-100" />
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110"
              >
                Консультация
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
            >
              <span className="block h-0.5 w-5 translate-y-[-4px] rounded bg-white" />
              <span className="block h-0.5 w-4 rounded bg-white" />
              <span className="block h-0.5 w-5 translate-y-[4px] rounded bg-white" />
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden md:hidden"
              >
                <div className="space-y-2 px-4 pb-4 pt-2">
                  {navItems.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                    >
                      <Icon className="h-5 w-5 text-white/60" />
                      <span>{label}</span>
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-3 font-semibold shadow-lg shadow-fuchsia-600/20"
                  >
                    Консультация
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
