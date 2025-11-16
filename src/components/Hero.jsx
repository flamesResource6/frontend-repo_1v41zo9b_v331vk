import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-rose-700 text-sm shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            New: Vintage Atomizer Collection
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-rose-900">
            Discover your signature scent
          </h1>
          <p className="mt-4 text-rose-800/80 text-lg max-w-prose">
            A curated selection of artisanal fragrances inspired by blooming gardens and golden hours. Play with the 3D bottle and explore our bestsellers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#shop" className="px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow">Shop Bestsellers</a>
            <a href="#notes" className="px-5 py-3 rounded-full bg-white/80 hover:bg-white text-rose-700 shadow">Explore Notes</a>
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-peach/0 via-peach/0 to-peach/80"></div>
    </section>
  );
}
