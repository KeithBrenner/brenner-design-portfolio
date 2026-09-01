/*
  PROJECTS DATA
  =============
  This is the short list that drives the parts of the site that have to
  stay in sync across every page: the home page grid, the "More Work"
  grid at the bottom of every project page, and the prev/next order.

  Everything else about an individual project -- its title/heading, the
  case-study description, the Services Provided list, the hero image,
  and the photo gallery -- now lives directly in that project's own
  work/<slug>.html file as plain HTML, so you can edit it there without
  touching this file or any JavaScript. See README.md ("Editing a
  project page") for exactly how each of those pieces works.

  TO ADD A NEW PROJECT:
  1. Copy one work/<slug>.html file, rename it (e.g. work/acme-rebrand.html).
  2. Add a new object below with a matching "slug" (must equal the new
     file's name without ".html").
  3. Set placeholder: false once you've replaced the sample copy in the
     HTML file with the real case study.
  4. Order here = order everywhere. Move an entry up/down this list to
     reorder the grid.

  Fields:
    - "slug": must match the HTML file's name (no ".html") and the
      file's <body data-slug="..."> attribute.
    - "title": shown as the label on this project's home-grid / "More
      Work" tile (hover/focus reveal) and used for the tile's alt text.
      Does NOT control anything inside the project's own page -- that
      page's own heading is plain text in its HTML now.
    - "category": not used anywhere on the site right now -- just a
      label to keep this list organized. (Each project's own
      <meta name="description"> lives in its HTML file's <head>, not
      here.)
    - "color": the flat placeholder-tile background color used on the
      home grid / "More Work" grid for THIS project's tile, for as long
      as it has no "image" below. Also a fine value to reuse as the
      inline background-color on that project's own hero/gallery items
      in its HTML, for a consistent look, but it isn't wired to them
      automatically -- set those directly in the HTML.
    - "image": optional. The square tile photo shown on the home grid
      and the "More Work" grid once you have one (drop the file in
      assets/images/, then point this at it, e.g.
      "assets/images/acme/tile.jpg" -- no leading slash, no "../", the
      site works out the right relative path). Leave it out and that
      tile keeps using the flat "color" placeholder.
    - "placeholder": true hides the tile from being mistaken for a
      finished case study by showing a small "Placeholder" pill on its
      grid tile. Set to false once the project's own page has real
      content.
*/

const PROJECTS = [
  {
    slug: "ego-fishing",
    title: "EGO Fishing",
    category: "Brand & Identity",
    color: "#F30004",
    image: "assets/images/ego/EgoFishingLogo-Branding 287x287.jpg",
    placeholder: true
  },
  {
    slug: "shopify-storefront-01",
    title: "Shopify Storefront",
    category: "Shopify Ecommerce Design & Dev",
    color: "#2c5f8a",
    placeholder: true
  },
  {
    slug: "packaging-01",
    title: "Packaging System",
    category: "Packaging",
    color: "#b5452b",
    placeholder: true
  },
  {
    slug: "apparel-01",
    title: "Apparel Collection",
    category: "Apparel",
    color: "#1c1c1c",
    placeholder: true
  },
  {
    slug: "product-photography-01",
    title: "Product Photography",
    category: "Product Photography",
    color: "#7a7460",
    placeholder: true
  },
  {
    slug: "graphic-design-01",
    title: "Poster & Print Series",
    category: "Graphic Design",
    color: "#d98c1f",
    placeholder: true
  },
  {
    slug: "product-design-01",
    title: "Product Design",
    category: "Product Design",
    color: "#4a4a68",
    placeholder: true
  },
  {
    slug: "brand-identity-02",
    title: "Retail Brand Refresh",
    category: "Brand & Identity",
    color: "#8a3b5c",
    placeholder: true
  },
  {
    slug: "shopify-storefront-02",
    title: "Ecommerce Rebuild",
    category: "Shopify Ecommerce Design & Dev",
    color: "#3f8f8a",
    placeholder: true
  },
  {
    slug: "packaging-02",
    title: "Packaging Refresh",
    category: "Packaging",
    color: "#a3672e",
    placeholder: true
  },
  {
    slug: "product-design-02",
    title: "Product Design Concept",
    category: "Product Design",
    color: "#6b4f9c",
    placeholder: true
  },
  {
    slug: "graphic-design-02",
    title: "Brand Campaign Graphics",
    category: "Graphic Design",
    color: "#c94f4f",
    placeholder: true
  }
];
