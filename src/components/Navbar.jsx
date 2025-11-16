import { ShoppingBag, Search, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onOpenCart }) {
  const [query, setQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const event = new CustomEvent("search-products", { detail: query });
    window.dispatchEvent(event);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-peach/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-300 via-amber-200 to-rose-200 grid place-items-center shadow-inner">
              <Sparkles className="h-5 w-5 text-rose-700" />
            </div>
            <span className="font-semibold tracking-tight text-rose-900 text-lg">Aura Atelier</span>
          </a>

          <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2 bg-white/70 rounded-full px-4 py-2 shadow-sm">
            <Search className="h-4 w-4 text-rose-700" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search perfumes..."
              className="bg-transparent outline-none text-sm w-64 placeholder:text-rose-400"
            />
          </form>

          <button onClick={onOpenCart} className="relative inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-full shadow">
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
