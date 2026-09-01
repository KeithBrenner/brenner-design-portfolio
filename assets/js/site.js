/*
  SITE.JS
  =======
  Small vanilla-JS helper that reads assets/js/projects-data.js and:
    1. Renders the project grid (used on the home page and at the
       bottom of every project page) from the PROJECTS array.
    2. On a project page, fills in the hero color/title/category/summary
       and builds the prev/next links, based on <body data-slug="...">.
    3. Fills in the current year in the footer.

  No build step, no server required -- this all runs in the browser,
  including when you just double-click index.html on your own computer.
*/

(function () {
  function currentSlug() {
    return document.body.getAttribute("data-slug") || null;
  }

  function findIndex(slug) {
    return PROJECTS.findIndex(function (p) { return p.slug === slug; });
  }

  function tileHTML(project) {
    // Once a project has a real tile image, drop the "Placeholder" pill
    // for it even if the rest of the copy (case study, etc.) isn't done --
    // the pill is about the image, not the whole project.
    var badge = (project.placeholder && !project.image)
      ? '<span class="tile__badge">Placeholder</span>'
      : "";
    // The real photo (when set) is applied as an inline background-image
    // directly on .tile__bg, not through a --custom-property in
    // styles.css -- see the note on .tile__bg there for why.
    var bgStyle = project.image
      ? ' style="background-image:url(\'' + assetPath(project.image) + '\')"'
      : "";
    // Reference-site look: flat color tile at rest, no visible label.
    // On hover/focus, the tile screens back (lighter overlay) and the
    // title fades in centered -- see .tile__scrim / .tile__title in
    // styles.css. The title text lives in the DOM (not just CSS
    // content) so it still reads fine to screen readers and on touch.
    return (
      '<a class="tile" href="' + tileHref(project.slug) + '" style="--tile-color:' + project.color + '">' +
        badge +
        '<span class="tile__bg"' + bgStyle + '></span>' +
        '<span class="tile__scrim"></span>' +
        '<span class="tile__title">' + project.title + "</span>" +
      "</a>"
    );
  }

  // Grid containers, and per-project image files, exist relative to both
  // the site root (index.html) and one folder down (work/*.html), so any
  // path built from a slug or a "assets/..." path in projects-data.js
  // needs the right relative prefix depending where the current page is.
  function inWorkFolder() {
    return location.pathname.indexOf("/work/") !== -1;
  }
  function tileHref(slug) {
    return (inWorkFolder() ? "" : "work/") + slug + ".html";
  }
  function assetPath(path) {
    return (inWorkFolder() ? "../" : "") + path.replace(/ /g, "%20");
  }

  function renderGrids() {
    var grids = document.querySelectorAll("[data-project-grid]");
    var excludeSlug = currentSlug();
    grids.forEach(function (grid) {
      var excludeCurrent = grid.getAttribute("data-project-grid") === "exclude-current";
      var list = PROJECTS.filter(function (p) {
        return !(excludeCurrent && p.slug === excludeSlug);
      });
      grid.innerHTML = list.map(tileHTML).join("");
    });
  }

  function renderProjectPage() {
    var slug = currentSlug();
    if (!slug) return;
    var idx = findIndex(slug);
    if (idx === -1) return;
    var project = PROJECTS[idx];
    var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
    var next = PROJECTS[(idx + 1) % PROJECTS.length];

    var hero = document.querySelector("[data-project-hero]");
    if (hero) {
      hero.style.setProperty("--tile-color", project.color);
      // Inline background-image directly (not a --custom-property) --
      // see the note on .tile__bg in styles.css for why.
      if (project.heroImage) {
        hero.style.backgroundImage = "url('" + assetPath(project.heroImage) + "')";
      }
    }

    // Gallery placeholder tiles read the same --tile-color as the hero,
    // via CSS inheritance -- set once on the container.
    var gallery = document.querySelector("[data-project-gallery]");
    if (gallery) gallery.style.setProperty("--tile-color", project.color);

    setText("[data-field='client']", project.client);

    var servicesList = document.querySelector("[data-field='services']");
    if (servicesList && project.services) {
      servicesList.innerHTML = project.services
        .map(function (s) { return "<li>" + s + "</li>"; })
        .join("");
    }

    var prevLink = document.querySelector("[data-nav='prev']");
    var nextLink = document.querySelector("[data-nav='next']");
    if (prevLink) { prevLink.href = prev.slug + ".html"; prevLink.textContent = "← Prev"; }
    if (nextLink) { nextLink.href = next.slug + ".html"; nextLink.textContent = "Next →"; }

    document.title = project.title + " — Brenner Design LLC";
  }

  function setText(selector, value) {
    var el = document.querySelector(selector);
    if (el) el.textContent = value;
  }

  function setYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  // Mobile hamburger + drawer. The drawer sits in normal document flow
  // right above the header (see styles.css), so opening it just pushes
  // the header/grid down -- no overlay or scrim involved.
  function initMobileNav() {
    var toggle = document.querySelector(".mobile-nav-toggle");
    var drawer = document.getElementById("mobile-nav");
    if (!toggle || !drawer) return;

    function closeDrawer() {
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
    function openDrawer() {
      drawer.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (drawer.hidden) {
        openDrawer();
      } else {
        closeDrawer();
      }
    });

    // Clicking a link in the drawer closes it (the page is about to
    // navigate anyway, but this keeps state clean if it doesn't).
    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", closeDrawer);
    }

    // Click anywhere outside the open drawer (and outside the toggle
    // itself) closes it.
    document.addEventListener("click", function (e) {
      if (drawer.hidden) return;
      if (drawer.contains(e.target) || toggle.contains(e.target)) return;
      closeDrawer();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDrawer();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGrids();
    renderProjectPage();
    setYear();
    initMobileNav();
  });
})();
