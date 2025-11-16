import { Star } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="group rounded-2xl bg-white/80 backdrop-blur border border-rose-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[4/3] overflow-hidden bg-rose-50">
        {product.image ? (
          <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full grid place-items-center text-rose-300">No Image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-rose-900">{product.title}</h3>
          <span className="text-rose-700 font-semibold">${product.price.toFixed(2)}</span>
        </div>
        {product.description && (
          <p className="mt-1 text-sm text-rose-800/70 line-clamp-2">{product.description}</p>
        )}
        <div className="mt-3 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating || 4) ? 'fill-amber-400' : 'opacity-30'}`} />
          ))}
        </div>
        <button onClick={() => onAdd(product)} className="mt-4 w-full rounded-full bg-rose-600 hover:bg-rose-700 text-white py-2">Add to cart</button>
      </div>
    </div>
  );
}
