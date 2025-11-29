// lib/catalogs.ts

const CATEGORIES: Record<string, string> = {
  plumbing: "Plumbing",
  hvac: "HVAC",
  electrical: "Electrical",
  tools: "Tools",
  safety: "Safety",
};

export function getCategoryName(key: string | undefined) {
  if (!key) return undefined;
  return CATEGORIES[key.toLowerCase()];
}

export function getAllCategoryKeys() {
  return Object.keys(CATEGORIES);
}

export default CATEGORIES;
