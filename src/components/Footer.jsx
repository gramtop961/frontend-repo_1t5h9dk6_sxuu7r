import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="cta" className="relative pt-16 pb-10">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur p-8 sm:p-12 overflow-hidden">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-400/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white"
              >
                Ready for a site that feels truly high‑end?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05, duration: 0.6 }}
                className="mt-3 text-gray-600 dark:text-gray-300"
              >
                Let’s build something distinctive that turns visitors into believers.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-end"
            >
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold shadow-xl shadow-gray-900/10 hover:shadow-gray-900/20 transition-all"
              >
                Book a consultation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/10 px-6 py-3 text-sm font-semibold text-gray-900 dark:text-white hover:bg-white/70 dark:hover:bg-white/10 transition"
              >
                Contact us
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} LuxeVibe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
