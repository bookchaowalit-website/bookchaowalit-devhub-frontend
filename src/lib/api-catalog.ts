export type ApiEntry = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  status: "online" | "offline" | "degraded";
  endpoints: number;
  category: string;
  url: string;
  features: string[];
  icon: "code" | "file" | "book" | "database" | "globe";
};

/** Developer-portal MCP catalog (showcase metadata only). */
export const API_CATALOG: ApiEntry[] = [
  {
    id: "portfolio",
    name: "Portfolio API",
    description: "Access projects, skills, blog posts, and GitHub activity",
    longDescription:
      "Comprehensive portfolio API providing access to all your professional information including projects, technical skills, blog posts, and GitHub contribution data.",
    status: "online",
    endpoints: 6,
    category: "Portfolio",
    url: "https://bookchaowalit-portfolio-frontend.vercel.app/api/mcp",
    features: ["Projects data", "Skills taxonomy", "Blog posts", "GitHub integration"],
    icon: "code",
  },
  {
    id: "techblog",
    name: "Tech Blog API",
    description: "Technical articles and programming content",
    longDescription:
      "Access technical articles, tutorials, and programming insights from the Tech Blog with full search and filtering capabilities.",
    status: "online",
    endpoints: 3,
    category: "Content",
    url: "https://bookchaowalit-techblog-frontend.vercel.app/api/mcp",
    features: ["Technical articles", "Search by query", "Post retrieval", "Category filtering"],
    icon: "file",
  },
  {
    id: "artblog",
    name: "Art Blog API",
    description: "Creative arts and design content",
    longDescription:
      "Explore creative arts content including illustrations, graphic design, photography, and digital art with rich metadata and tagging.",
    status: "online",
    endpoints: 3,
    category: "Content",
    url: "https://bookchaowalit-artblog-frontend.vercel.app/api/mcp",
    features: ["Art posts", "Tag-based filtering", "Creative content", "Design resources"],
    icon: "book",
  },
  {
    id: "techspace",
    name: "Tech Space API",
    description: "Technology stacks and development platforms",
    longDescription:
      "Comprehensive information about technology stacks, development platforms, and tools used in modern software development.",
    status: "online",
    endpoints: 6,
    category: "Tech",
    url: "https://bookchaowalit-techspace-frontend.vercel.app/api/mcp",
    features: ["Stack information", "Platform details", "Tool descriptions", "Best practices"],
    icon: "database",
  },
  {
    id: "mcp",
    name: "MCP List Hub",
    description: "Central aggregator for all MCP servers",
    longDescription:
      "The central hub that aggregates all MCP servers, providing discovery, documentation, and proxy functionality for the entire ecosystem.",
    status: "online",
    endpoints: 3,
    category: "Infrastructure",
    url: "https://bookchaowalit-mcplist-frontend.vercel.app/api/mcp",
    features: ["Server discovery", "Tool aggregation", "Proxy functionality", "Documentation"],
    icon: "globe",
  },
];

export function catalogIds(catalog: ApiEntry[] = API_CATALOG): string[] {
  return catalog.map((entry) => entry.id);
}

export function allUrlsHttps(catalog: ApiEntry[] = API_CATALOG): boolean {
  return catalog.every((entry) => entry.url.startsWith("https://"));
}
