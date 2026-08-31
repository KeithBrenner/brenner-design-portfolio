/*
  PROJECTS DATA
  =============
  This is the single list that drives the whole site: the home page grid,
  the "More Work" grid at the bottom of every project page, and the
  prev/next links on project pages.

  TO ADD A NEW PROJECT:
  1. Copy one work/project-XX.html file, rename it (e.g. work/acme-rebrand.html).
  2. Add a new object below with a matching "slug" (must equal the new
     file's name without ".html").
  3. Set placeholder: false once you've replaced the sample copy in the
     HTML file with the real case study.
  4. Order here = order everywhere. Move an entry up/down this list to
     reorder the grid.

  Colors are just flat placeholder tiles until you have real project
  images -- swap "image" to a real file path (e.g. "/assets/images/acme-01.jpg")
  and the CSS will use it automatically once you add that support (see README).
*/

const PROJECTS = [
  {
    slug: "brand-identity-01",
    title: "New Brand Identity",
    category: "Brand & Identity",
    client: "Client Name",
    color: "#2f6b3a",
    summary: "A full identity system built from strategy through to final guidelines -- logo, color, type, and applications.",
    placeholder: true
  },
  {
    slug: "shopify-storefront-01",
    title: "Shopify Storefront",
    category: "Shopify Ecommerce Design & Dev",
    client: "Client Name",
    color: "#2c5f8a",
    summary: "Custom Shopify theme design and build, from wireframes to a launch-ready storefront.",
    placeholder: true
  },
  {
    slug: "packaging-01",
    title: "Packaging System",
    category: "Packaging",
    client: "Client Name",
    color: "#b5452b",
    summary: "Shelf-ready packaging design across a multi-SKU product line, built to stand out and stay on-brand.",
    placeholder: true
  },
  {
    slug: "apparel-01",
    title: "Apparel Collection",
    category: "Apparel",
    client: "Client Name",
    color: "#1c1c1c",
    summary: "Graphics and garment design for a seasonal apparel drop, from concept sketches to production-ready art.",
    placeholder: true
  },
  {
    slug: "product-photography-01",
    title: "Product Photography",
    category: "Product Photography",
    client: "Client Name",
    color: "#7a7460",
    summary: "Studio product photography for ecommerce and marketing use across web, social, and print.",
    placeholder: true
  },
  {
    slug: "graphic-design-01",
    title: "Poster & Print Series",
    category: "Graphic Design",
    client: "Client Name",
    color: "#d98c1f",
    summary: "A print and poster series exploring bold type and color for a campaign launch.",
    placeholder: true
  },
  {
    slug: "product-design-01",
    title: "Product Design",
    category: "Product Design",
    client: "Client Name",
    color: "#4a4a68",
    summary: "Concept-to-production product design work, balancing manufacturability with a distinct visual identity.",
    placeholder: true
  },
  {
    slug: "brand-identity-02",
    title: "Retail Brand Refresh",
    category: "Brand & Identity",
    client: "Client Name",
    color: "#8a3b5c",
    summary: "A ground-up rebrand for a growing retail business, including identity, packaging, and in-store signage.",
    placeholder: true
  }
];
