import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/data/catalog";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/productos/${category.slug}`}
      className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(180deg,#e7dcc9_0%,#c08a46_100%)] p-5 text-stone-950">
            <span className="max-w-[12rem] text-lg font-semibold tracking-tight">{category.name}</span>
          </div>
        )}
      </div>
      <div className="space-y-3 p-6">
        <h3 className="text-xl font-semibold text-stone-950">{category.name}</h3>
        <p className="text-sm leading-7 text-stone-600">{category.description}</p>
        <p className="text-sm font-semibold text-amber-800">Ver categoría</p>
      </div>
    </Link>
  );
}
