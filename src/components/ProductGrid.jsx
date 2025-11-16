import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ onAdd }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async (q) => {
      try {
        setLoading(true)
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL(`${baseUrl}/products`)
        if (q) url.searchParams.set('q', q)
        const res = await fetch(url.toString())
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    const handler = (e) => fetchProducts(e.detail)
    window.addEventListener('search-products', handler)
    fetchProducts()
    return () => window.removeEventListener('search-products', handler)
  }, [])

  if (loading) return <div className="py-24 text-center text-rose-700">Loading perfumes...</div>
  if (error) return <div className="py-24 text-center text-rose-700">{error}</div>

  return (
    <section id="shop" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  )
}
