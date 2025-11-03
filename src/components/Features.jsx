import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Star, Rocket } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Polished Motion',
    desc: 'Micro-interactions and tasteful transitions that feel effortless.',
    gradient: 'from-indigo-500/20 to-fuchsia-500/20',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable & Fast',
    desc: 'Built with modern tooling for performance and stability.',
    gradient: 'from-emerald-400/20 to-cyan-400/20',
  },
  {
    icon: Star,
    title: 'Premium Aesthetic',
    desc: 'A refined visual system that elevates your brand presence.',
    gradient: 'from-amber-400/20 to-rose-400/20',
  },
  {
    icon: Rocket,
    title: 'Conversion‑Driven',
    desc: 'Designed to guide attention and maximize engagement.',
    gradient: 'from-violet-400/20 to-sky-400/20',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white"
          >
            Crafted for a luxury feel
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Each detail is tuned for clarity, elegance, and impact.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] backdrop-blur shadow-sm"
            >
              <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.gradient} blur-2xl`} />
              <div className="relative p-6">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg shadow-black/10">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
