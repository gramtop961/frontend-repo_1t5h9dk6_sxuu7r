import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        {/* Showcase section placeholder removed to keep components focused */}
        <section id="showcase" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Showcase</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A selection of refined layouts and components designed to impress.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] backdrop-blur">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10" />
                  <div className="relative aspect-[4/3]" />
                  <div className="relative p-5">
                    <div className="h-2 w-2 rounded-full bg-emerald-400 inline-block mr-2 align-middle" />
                    <span className="align-middle text-sm text-gray-700 dark:text-gray-300">Smooth, luxury‑grade card</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
