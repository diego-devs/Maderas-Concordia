import { categories, products } from "@/data/catalog";

export function getCategories() {
  return categories;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProducts() {
  return products;
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.categorySlugs.includes(slug));
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductPrimaryCategory(slug: string) {
  const product = getProductBySlug(slug);
  if (!product) return undefined;
  return getCategoryBySlug(product.categorySlugs[0]);
}
