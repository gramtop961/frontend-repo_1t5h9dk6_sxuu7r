import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square, Star, Shield } from 'lucide-react';

const properties = [
  {
    title: 'Skyline Penthouse',
    location: 'Downtown, Dubai',
    price: '$8.2M',
    beds: 4,
    baths: 4,
    area: 520,
    badge: 'ICONIC',
    bg: 'from-fuchsia-600/20 via-purple-600/10 to-indigo-600/20',
  },
  {
    title: 'Azure Marina Villa',
    location: 'Palm Jumeirah',
    price: '$12.9M',
    beds: 6,
    baths: 7,
    area: 980,
    badge: 'SIGNATURE',
    bg: 'from-indigo-600/20 via-blue-600/10 to-cyan-500/20',
  },
  {
    title: 'Noir Glass House',
    location: 'Beverly Hills',
    price: '$16.4M',
    beds: 5,
    baths: 6,
    area: 860,
    badge: 'MUSEUM',
    bg: 'from-slate-700/30 via-slate-800/30 to-black/30',
  },
];

export default function Features() {
  return (
    <section id="properties" className="relative z-10 mx-auto max-w-7xl px-4 py-20">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <motion.h2
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          Кураторская коллекция
        </motion.h2>
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-white/70"
        >
          Выбор объектов с безупречной архитектурой, световыми решениями и панорамами, которые не нуждаются в фильтрах.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            {/* Badge */}
            <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] font-semibold tracking-wider text-white/80">
              <Star className="h-3.5 w-3.5 text-yellow-300" /> {p.badge}
            </div>

            {/* Visual */}
            <div className={`relative h-44 w-full overflow-hidden rounded-2xl bg-gradient-to-br ${p.bg}`}>
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.25),transparent_40%)]" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-60" />
            </div>

            {/* Content */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <div className="mt-1 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-white/50" /> {p.location}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-white/70">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <BedDouble className="h-4 w-4 text-white/60" /> {p.beds}
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <Bath className="h-4 w-4 text-white/60" /> {p.baths}
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                  <Square className="h-4 w-4 text-white/60" /> {p.area} м²
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold">{p.price}</span>
                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-4 py-2 text-sm font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110"
                >
                  Запросить показ
                </a>
              </div>
            </div>

            {/* Hover glow */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-violet-500/10 to-indigo-500/20 blur-2xl" />
            </div>
          </motion.article>
        ))}
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ y: 18, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-14 grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-3"
      >
        <div className="flex items-center gap-3">
          <Shield className="h-5 w-5 text-emerald-300" />
          <p className="text-white/70">100% приватность и безопасность сделок</p>
        </div>
        <div className="flex items-center gap-3">
          <Star className="h-5 w-5 text-yellow-300" />
          <p className="text-white/70">Портфель от архитекторов уровня Pritzker</p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-cyan-300" />
          <p className="text-white/70">Глобальная география: ОАЭ, США, ЕС</p>
        </div>
      </motion.div>
    </section>
  );
}
