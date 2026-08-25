export interface CategoryColorTheme {
  base: string;
  light: string;
  text: string;
  image: string;
}

export const CATEGORY_COLOR_MAP: Record<string, CategoryColorTheme> = {
  kashayam: { base: "#5B3A1E", light: "#E7D6B5", text: "#FFFFFF", image: "/images/demo/kashayam.jpg" },
  ghrutham: { base: "#E1B12C", light: "#FFF7D6", text: "#11222B", image: "/images/demo/ghrutham.jpg" },
  kuzhambhu: { base: "#2C3E50", light: "#B2BABB", text: "#FFFFFF", image: "/images/demo/tailam.jpg" },
  "enna-tailam": { base: "#C48A2C", light: "#F4ECD9", text: "#FFFFFF", image: "/images/demo/tailam.jpg" },
  tailam: { base: "#C48A2C", light: "#F4ECD9", text: "#FFFFFF", image: "/images/demo/tailam.jpg" },
  enna: { base: "#C48A2C", light: "#F4ECD9", text: "#FFFFFF", image: "/images/demo/tailam.jpg" },
  choornam: { base: "#6E8B6B", light: "#DCE6D5", text: "#FFFFFF", image: "/images/demo/choornam.jpg" },
  arishtam: { base: "#6B1E2E", light: "#B87333", text: "#FFFFFF", image: "/images/demo/kashayam.jpg" },
  lehyam: { base: "#8B5A2B", light: "#E2B66A", text: "#FFFFFF", image: "/images/demo/lehyam.jpg" },
  asavam: { base: "#9C3F2E", light: "#D8A48F", text: "#FFFFFF", image: "/images/demo/kashayam.jpg" },
  rasayanam: { base: "#1F4D3A", light: "#C9A24D", text: "#FFFFFF", image: "/images/demo/rasayanam.jpg" },
  // Category mapping by slug for current demo database categories
  "skin-care": { base: "#C48A2C", light: "#F4ECD9", text: "#FFFFFF", image: "/images/demo/tailam.jpg" },
  "hair-care": { base: "#6E8B6B", light: "#DCE6D5", text: "#FFFFFF", image: "/images/demo/choornam.jpg" },
  "digestion-gut-health": { base: "#5B3A1E", light: "#E7D6B5", text: "#FFFFFF", image: "/images/demo/kashayam.jpg" },
  "joint-muscle-care": { base: "#2C3E50", light: "#B2BABB", text: "#FFFFFF", image: "/images/demo/ghrutham.jpg" },
  "general-wellness-immunity": { base: "#1F4D3A", light: "#C9A24D", text: "#FFFFFF", image: "/images/demo/rasayanam.jpg" },
  default: { base: "#1F4D3A", light: "#EFE7D3", text: "#FFFFFF", image: "/images/demo/kashayam.jpg" },
};

export function getCategoryTheme(slugOrName?: string | null): CategoryColorTheme {
  if (!slugOrName) return CATEGORY_COLOR_MAP.default;
  const normalized = slugOrName.toLowerCase().trim().replace(/[^a-z0-9]/g, "-");
  
  for (const [key, theme] of Object.entries(CATEGORY_COLOR_MAP)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return theme;
    }
  }
  return CATEGORY_COLOR_MAP.default;
}

export function getFormulationImage(slugOrName?: string | null, fallbackUrl?: string | null): string {
  if (fallbackUrl && !fallbackUrl.includes("unsplash.com") && !fallbackUrl.includes("via.placeholder")) {
    return fallbackUrl;
  }
  return getCategoryTheme(slugOrName).image;
}
