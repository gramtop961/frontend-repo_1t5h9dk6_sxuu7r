import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-white/10 bg-black/40 py-16 backdrop-blur">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 z-0 flex justify-center">
        <div className="h-56 w-[70%] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-5">
        {/* Brand & Copy */}
        <div className="md:col-span-2">
          <motion.h3
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            НУР Real Estate
          </motion.h3>
          <p className="mt-3 max-w-md text-white/70">
            Луч света на рынке элитной недвижимости. Курируем сделки в ритме вашей жизни.
          </p>
          <div className="mt-6 space-y-2 text-white/70">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +971 555 123 456</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> concierge@nur.agency</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Dubai · Los Angeles · Monaco</div>
          </div>
        </div>

        {/* Contact form */}
        <div className="md:col-span-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
              }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs text-white/70">Имя</label>
                <input
                  required
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/40"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1 block text-xs text-white/70">Телефон</label>
                <input
                  required
                  type="tel"
                  placeholder="+971 ..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/40"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs text-white/70">Запрос</label>
                <textarea
                  rows={4}
                  placeholder="Опишите желаемый объект, бюджет и сроки"
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/40 focus:border-fuchsia-400/40"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold shadow-lg shadow-fuchsia-600/20 transition hover:brightness-110"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>
          <p className="mt-4 text-xs text-white/50">Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности.</p>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-white/50">© {new Date().getFullYear()} НУР Agency. Все права защищены.</div>
    </footer>
  );
}
