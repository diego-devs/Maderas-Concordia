import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { getCategories, getProducts } from "@/lib/catalog";

export const metadata = {
  title: "Productos",
  description: "Explora categorías y productos de Maderas Concordia en una versión navegable y estática.",
};

export default function ProductosPage() {
  const categories = getCategories();
  const products = getProducts();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Catálogo"
        title="Productos y categorías"
        description="Esta primera versión prioriza una navegación simple: primero eliges una línea y después profundizas en cada producto. También puedes recorrer un listado general."
      />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-950">Categorías</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-stone-950">Todos los productos</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              categorySlug={product.categorySlugs[0]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
