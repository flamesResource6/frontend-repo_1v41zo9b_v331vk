export default function Footer() {
  return (
    <footer className="mt-16 border-t border-rose-100 bg-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-rose-700/80 grid sm:grid-cols-3 gap-6">
        <div>
          <p className="font-semibold text-rose-900">Aura Atelier</p>
          <p className="mt-2">Artisanal fragrances crafted for every mood and moment.</p>
        </div>
        <div>
          <p className="font-semibold text-rose-900">Support</p>
          <ul className="mt-2 space-y-1">
            <li><a className="hover:text-rose-900" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-rose-900" href="#">Fragrance Guide</a></li>
            <li><a className="hover:text-rose-900" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-rose-900">Newsletter</p>
          <form className="mt-2 flex gap-2">
            <input placeholder="Your email" className="flex-1 rounded-md border border-rose-200 px-3 py-2 bg-white/70 placeholder:text-rose-400" />
            <button className="px-4 rounded-md bg-rose-600 text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-rose-600">© {new Date().getFullYear()} Aura Atelier. All rights reserved.</div>
    </footer>
  )
}
