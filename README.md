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
prev/next links on project pages are all generated from that one list
automatically.

### To add a new project

1. Duplicate any file in `work/` and rename it, e.g. `work/acme-rebrand.html`.
2. Open `assets/js/projects-data.js` and add a new entry to the `PROJECTS`
   array. The `slug` must match your new file's name (without `.html`).
   Put it wherever in the list you want it to appear — order in the list
   is order on the grid.
3. Open your new `work/acme-rebrand.html` file and replace the placeholder
   case-study paragraph with real text.
4. Set `placeholder: false` on that project in `projects-data.js` once
   it's real — this removes the "Placeholder" badge from its tile.

### To add real photos instead of flat color tiles

Right now each tile, project hero, and the photo gallery on every project
page are all just a flat color (set by the `color` field in
`projects-data.js`) so the site works without any images yet. To use a
real photo instead:

1. Add your image file(s) to `assets/images/` (create that folder).
2. In `assets/css/styles.css`, the home/grid tiles, the project hero, and
   the gallery tiles all read the same `--tile-color` CSS variable —
   swap the relevant rule (`.tile__bg`, `.project-hero`, or
   `.gallery-item`) to `background: url(...) center/cover` instead, or
   ask Claude to wire this up for a specific project. Since every
   project page currently uses the same placeholder gallery pattern
   (full-width photo, full-width photo, then two side-by-side), tell
   Claude the layout you actually want for that project once you have
   real photos and it'll rebuild that page's gallery to match.

### To edit a project's "Services Provided" list

Each project in `projects-data.js` has a `services` array — just a list
of strings. Edit that array directly; the project page renders it
automatically (it splits into two columns on its own, no HTML editing
needed).

### To remove a project

Delete its entry from `projects-data.js`. You can leave the old `work/*.html`
file in place (it just won't show up in any grid) or delete it too.

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
