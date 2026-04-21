import { categories, products } from "../src/data/catalog";
import wixProducts from "/tmp/maderas-concordia-extract/products.json" assert { type: "json" };
import wixCategories from "/tmp/maderas-concordia-extract/categories.json" assert { type: "json" };

type WixProduct = { slug: string; h1: string; shortDescription: string; description: string; imageUrls: string[] };
type WixCategory = { slug: string; h1: string; title: string; imageUrl: string };

const normalizedCategorySourceSlugs = new Set(["productos-para-diseño-y-construcción", "construcción", "embalajes", "muebles-de-madera", "maderas-de-alto-valor", "maderas-para-construcción-1"]);
const allowedEmptyDescriptions = new Set(["madera-para-cimbra", "tablones-de-pino-americano", "vigas-h20", "tablones-de-pino-nacional", "lambrin", "duelas"]);
function fail(message: string): never { console.error(`VERIFY_FAIL: ${message}`); process.exit(1); }
const wixProductsBySlug = new Map((wixProducts as WixProduct[]).map((product) => [product.slug, product]));
const wixCategoriesBySlug = new Map((wixCategories as WixCategory[]).map((category) => [category.slug, category]));
if (products.length !== wixProductsBySlug.size) fail(`product count mismatch: catalog=${products.length} wix=${wixProductsBySlug.size}`);
if (categories.length !== normalizedCategorySourceSlugs.size) fail(`category count mismatch: catalog=${categories.length} expected=${normalizedCategorySourceSlugs.size}`);
for (const category of categories) {
  if (!normalizedCategorySourceSlugs.has(category.wixSlug)) fail(`category ${category.slug} references unexpected wixSlug ${category.wixSlug}`);
  const wixCategory = wixCategoriesBySlug.get(category.wixSlug);
  if (!wixCategory) fail(`missing wix category for ${category.slug}`);
  if (!category.name.trim()) fail(`category ${category.slug} has empty name`);
  if (wixCategory.imageUrl && category.image !== wixCategory.imageUrl) fail(`category ${category.slug} image mismatch`);
}
for (const product of products) {
  const wixProduct = wixProductsBySlug.get(product.wixSlug);
  if (!wixProduct) fail(`missing wix product for ${product.slug}`);
  if (!product.name.trim()) fail(`product ${product.slug} has empty name`);
  if (!product.images.length) fail(`product ${product.slug} has no images`);
  if (product.images.length !== wixProduct.imageUrls.length) fail(`product ${product.slug} image count mismatch catalog=${product.images.length} wix=${wixProduct.imageUrls.length}`);
  for (let i = 0; i < wixProduct.imageUrls.length; i += 1) if (product.images[i] !== wixProduct.imageUrls[i]) fail(`product ${product.slug} image ${i} mismatch`);
  if (!product.categorySlugs.length) fail(`product ${product.slug} has no categories`);
  for (const categorySlug of product.categorySlugs) if (!categories.find((category) => category.slug === categorySlug)) fail(`product ${product.slug} references unknown category ${categorySlug}`);
  const wixHadContent = Boolean(wixProduct.description?.trim() || wixProduct.shortDescription?.trim());
  if (wixHadContent && (!product.description.trim() || !product.shortDescription.trim())) fail(`product ${product.slug} lost non-empty wix content`);
  if (!wixHadContent && !allowedEmptyDescriptions.has(product.wixSlug) && !product.description.trim()) fail(`product ${product.slug} unexpectedly empty`);
}
console.log(`Verified ${products.length} products and ${categories.length} categories.`);
