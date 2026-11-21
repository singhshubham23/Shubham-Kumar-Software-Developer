# Shubham Kumar · Portfolio (Next.js)

A single-page portfolio with case-study pages, built on the Next.js App Router, Tailwind CSS and Framer Motion. The visual language (outlined display type, cloud-grey background, floating glass nav, expanding service rows, dark experience panel, and closing CTA) follows the reference design.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Edit your content

Everything is in **`data/portfolio.js`**: profile, services, experience, projects, skills, education, and achievements. Change the text there and the whole site updates.

To update the résumé, replace **`public/resume.pdf`** (keep the same filename).

Photo: replace **`public/images/hero.jpeg`**. Project screenshots live in **`public/images/projects/`**. Each project in `data/portfolio.js` points to its image path. Set `image: null` to show a typographic card instead.

## Deploy

Works out of the box on Vercel: import the repo and deploy. Update `website` in `data/portfolio.js` to your live URL so the metadata, sitemap and Open Graph tags are correct.

## Structure

```
app/
  layout.js          metadata, fonts, root shell
  page.js            home page (all sections)
  work/[slug]/       project case-study pages (statically generated)
  sitemap.js         /sitemap.xml
  robots.js          /robots.txt
components/          Navbar, Hero, Services, SelectedWork, Experience, Skills, ...
data/portfolio.js    all content
public/              resume.pdf, images
```
