
export type CategorySlug =
  | "plumbing"
  | "heating"
  | "hvac"
  | "electrical"
  | "carpentry"
  | "tools";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: "plumbing",
    name: "Plumbing",
    description: "Pipe, fittings, valves, fixtures, and repair parts.",
  },
  {
    slug: "heating",
    name: "Heating",
    description: "Boilers, pumps, radiators, and hydronic accessories.",
  },
  {
    slug: "hvac",
    name: "HVAC",
    description: "Condensers, air handlers, thermostats, and line sets.",
  },
  {
    slug: "electrical",
    name: "Electrical",
    description: "Wire, breakers, panels, and control components.",
  },
  {
    slug: "carpentry",
    name: "Carpentry",
    description: "Fasteners, anchors, framing hardware, and adhesives.",
  },
  {
    slug: "tools",
    name: "Tools",
    description: "Press tools, pipe cutters, crimpers, meters, and more.",
  },
];
