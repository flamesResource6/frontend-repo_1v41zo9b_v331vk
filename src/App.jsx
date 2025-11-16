import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])
  const backend = useMemo(() => import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000', [])

  useEffect(() => {
    // Seed sample products on first load (safe/no-op if already seeded)
    fetch(`${backend}/seed`, { method: 'POST' }).catch(() => {})
  }, [backend])

  const addToCart = (p) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id)
      if (existing) {
        return prev.map((i) => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...p, qty: 1 }]
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-peach to-white text-rose-900">
      <Navbar onOpenCart={() => alert('Cart coming soon! Items: ' + cart.reduce((a,c)=>a+c.qty,0))} />
      <Hero />
      <ProductGrid onAdd={addToCart} />

      <section id="notes" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Explore fragrance families</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {title:'Citrus', desc:'Bright, sparkling, refreshing'},
              {title:'Floral', desc:'Romantic blooms & petals'},
              {title:'Woody', desc:'Warm, grounded, elegant'},
              {title:'Oriental', desc:'Spiced, rich, enveloping'},
            ].map((n) => (
              <div key={n.title} className="rounded-xl p-5 bg-white/70 border border-rose-100 shadow-sm">
                <p className="font-semibold">{n.title}</p>
                <p className="text-sm text-rose-800/70">{n.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
