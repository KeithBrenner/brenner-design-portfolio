# Brenner Design LLC — Portfolio Site

Plain HTML/CSS/JS. No build step, no framework, no subscription required
to run it. That's on purpose — the goal is a site you can update in five
minutes between real client work, not a second job.

## Preview it right now

Just double-click `index.html`. It opens in your browser and every link
(Work, About, Contact, individual projects, prev/next) works exactly as
it will once it's live online, because everything uses relative links —
no local server needed.

## How the project grid works

You don't have to hand-edit the grid on every page. There's one file,
`assets/js/projects-data.js`, that lists every project. The home page,
the "More Work" grid at the bottom of every project page, and the
prev/next order are all generated from that one list automatically.
That's the ONLY thing this file controls, though — everything else
about an individual project's own page (its title, description,
services, hero, and gallery) is plain HTML in that project's own file.
See "Editing a project page" below for all of that.

### To add a new project

1. Duplicate any file in `work/` and rename it, e.g. `work/acme-rebrand.html`.
2. Open `assets/js/projects-data.js` and add a new entry to the `PROJECTS`
   array. The `slug` must match your new file's name (without `.html`).
   Put it wherever in the list you want it to appear — order in the list
   is order on the grid. Set `color` to a flat placeholder tile color for
   now (you can add a real `image` later — see the comment at the top of
   that file for the exact field).
3. Follow "Editing a project page" below to fill in that new file's
   title, description, services, hero, and gallery.
4. Set `placeholder: false` on that project in `projects-data.js` once
   it's real — this removes the "Placeholder" badge from its home-grid
   tile.

### To remove a project

Delete its entry from `projects-data.js`. You can leave the old `work/*.html`
file in place (it just won't show up in any grid) or delete it too.

## Editing a project page

Everything on an individual project's page — its heading, description,
Services Provided list, hero image, and photo gallery — is written
directly in that project's `work/<slug>.html` file. There's no data file
or JavaScript step for any of this; edit the HTML and reload the page.

### Title and description

```html
<h1 class="project-intro__client">Client Name</h1>
<p class="project-intro__summary">Your case-study copy goes here.</p>
```
Just edit the text between the tags.

### Services Provided

```html
<ul class="project-services__list">
  <li>Brand Development</li>
  <li>Identity Systems</li>
</ul>
```
Add, remove, or reword `<li>` lines — as many as you want.

### The hero image and each gallery photo

The hero (`<div class="project-hero" data-project-hero>`) and every
photo-gallery slot (`<div class="gallery-item">`) work the same way:
you style them with a plain `style="..."` attribute, using whichever of
these four properties you need:

- `background-color` — a flat field color, e.g. `#F30004`. Shows through
  if there's no image yet, or around a centered logo (see `--bg-fit`
  below).
- `background-image` — `url('../assets/images/acme/hero.jpg')` (project
  pages live one folder down, so image paths need the `../` prefix).
  Works for a photo or an SVG logo.
- `aspect-ratio` — the shape of the box, e.g. `2 / 1` (the hero's
  default) or `3 / 2` for something taller. Any `w / h` ratio works.
- `--bg-fit` — how the image is sized inside the box. Leave it out (or
  use `cover`, the default) for a photo that should fill the box edge-
  to-edge, cropped as needed. Use a percentage like `45%`, or the
  keyword `contain`, to show the WHOLE image centered and scaled down
  instead — this is what you want for a logo mark on a color field, so
  it doesn't get cropped.
- `--bg-fit-mobile` — optional. A different `--bg-fit` just for phone-
  width screens, if a logo needs to sit larger/smaller there than it
  does on desktop.

A full-bleed photo hero:
```html
<div class="project-hero" data-project-hero
     style="background-image:url('../assets/images/acme/hero.jpg');"></div>
```

A centered logo on a brand-red field, sized differently on mobile
(this is exactly what `work/ego-fishing.html` does):
```html
<div class="project-hero" data-project-hero
     style="background-color:#F30004;
            background-image:url('../assets/images/ego/EGO Logo Silver GReg.svg');
            aspect-ratio:3 / 2;
            --bg-fit:45%;
            --bg-fit-mobile:60%;"></div>
```

Once a hero or gallery slot has a real image, delete its
`<span class="tile__badge">Placeholder</span>` — that's what shows the
small "Placeholder" pill.

### The photo gallery layout

```html
<div class="project-gallery">
  <div class="gallery-row gallery-row--full">
    <div class="gallery-item" style="..."></div>
  </div>
  <div class="gallery-row gallery-row--half">
    <div class="gallery-item" style="..."></div>
    <div class="gallery-item" style="..."></div>
  </div>
</div>
```
`gallery-row--full` is one column, `gallery-row--half` is two side by
side. Add, remove, or reorder `.gallery-row`/`.gallery-item` elements
for whatever rhythm you want that project's gallery to have — every
`.gallery-item` accepts the same `background-color` /
`background-image` / `aspect-ratio` / `--bg-fit` / `--bg-fit-mobile`
properties as the hero, described above.

## Editing text/colors/fonts sitewide

- Colors, fonts, and spacing all live in `assets/css/styles.css` at the
  top (`:root { ... }`) — `--accent` is the orange brand color.
- The About page bio, skills list, and testimonials are plain text in
  `about.html` — edit directly.
- The Contact page email address is in `contact.html`.

## Deploying it (making it live on the internet)

The simplest option, and the one that matches "keep this from being a
second job":

**Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop)
and drag this whole folder onto the page. It gives you a live URL in
under a minute, for free, no account required to try it (you'll want a
free account to keep the same URL and add a custom domain like
brennerdesignllc.com). To update the live site later, just drag the
folder on again.

If you'd rather it auto-update whenever you edit files: put this folder
in a GitHub repository and connect that repo to Netlify (or GitHub Pages).
Then every change you push goes live automatically, with no dragging
required. This is worth setting up once you're updating the site
regularly — ask Claude to help wire it up.

## Ongoing updates via Claude

Once you've connected a folder to Claude (Claude desktop app → Add
Folder), you can drop new project photos and a short case-study blurb
into that folder any time and ask Claude to add them to the site — it
will edit `projects-data.js`, create the new `work/*.html` page, and
(if the folder is your live site's folder) the update is ready to
redeploy.

## A note on the contact form

There's no working contact form right now — the Contact page just links
to `mailto:` and LinkedIn, which needs zero setup. If you'd rather have
an actual form, Netlify Forms can add one with a couple of HTML
attributes and no backend code — ask Claude to add it once the site is
deployed on Netlify.
