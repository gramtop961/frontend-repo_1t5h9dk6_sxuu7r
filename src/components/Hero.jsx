import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/30 to-amber-400/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-amber-400/30 via-rose-400/30 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5 text-indigo-500" /> Premium experience
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white"
            >
              Elevate your brand with an elegant, high‑end web presence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            >
              Crafted animations, refined typography, and a luxurious visual rhythm that signal trust, quality, and attention to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-8 flex items-center gap-3"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 transition-all"
              >
                Start your project
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-transparent px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition"
              >
                Explore showcase
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-1 shadow-2xl"
            >
              <div className="relative h-full w-full rounded-3xl bg-white/5 p-6">
                <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.25),transparent_35%)]" />
                <div className="relative h-full w-full grid place-items-center">
                  <motion.div
                    initial={{ scale: 0.9, rotate: -2 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-5 text-center text-white max-w-sm"
                  >
                    <p className="text-sm uppercase tracking-widest text-white/70">Signature quality</p>
                    <p className="mt-2 text-2xl font-medium">Feel the difference of a truly premium site</p>
                    <p className="mt-3 text-white/70 text-sm">Silky interactions, tasteful motion, and a luxurious palette.</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
