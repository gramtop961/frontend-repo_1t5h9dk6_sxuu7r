import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[92vh] overflow-hidden pt-28">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays (non-interactive) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50vh] w-[60vw] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-[-10%] h-[40vh] w-[50vw] rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="col-span-7">
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs text-white/70 backdrop-blur"
            >
              НУР — свет элитной архитектуры
              <span className="h-1 w-1 rounded-full bg-white/40" />
              since 2012
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.9, ease: 'easeOut' }}
              className="mt-5 bg-gradient-to-br from-white via-white to-fuchsia-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl lg:text-6xl"
            >
              НУР Real Estate — проводник к безупречной роскоши
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
              className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
            >
              Мы создаём опыт, где каждая деталь — как луч света в ночи: ясная, сильная, вдохновляющая. Элитные пентхаусы, виллы у моря и архитектура, которая внушает трепет.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#properties"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-xl shadow-fuchsia-600/20 transition hover:brightness-110"
              >
                Смотреть объекты
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Получить консультацию
                <span className="ml-2 inline-block translate-x-0 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </motion.div>

            {/* Glowing feature pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {['Private Concierge', 'NFT-ключи и смарт-контракты', 'VR-показы 24/7', 'Архитектура класса Iconic'].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur"
                >
                  <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Accent card */}
          <div className="col-span-5">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.8, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-sm text-white/70">Подход «луч»: сияние в каждой детали</div>
              <div className="mt-2 text-2xl font-semibold">Кураторские сделки под ключ</div>
              <p className="mt-2 text-white/60">
                От первого звонка до передачи ключей — мы строим траекторию, где путь так же красив, как и результат. Тонкая аналитика, приватность и безупречная эстетика.
              </p>
              <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/40 to-indigo-500/40 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
