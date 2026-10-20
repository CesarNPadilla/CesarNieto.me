# Cesar Nieto — Personal Portfolio

A bilingual personal website presenting Cesar Nieto's software QA and test automation profile, skills, experience, projects, and contact information. This repository contains the website source and downloadable résumés.

**Website address:** [cesarnieto.me](https://cesarnieto.me/) · [Spanish version](https://cesarnieto.me/es/)

The pages currently use this domain in their metadata. Hosting and domain configuration must be verified separately before publishing.

## For recruiters and reviewers

- **Professional focus:** test automation management, Selenium and Playwright frameworks, Saviynt IAM testing, and CI/CD delivery.
- **Working languages:** English and Spanish.
- **Contact:** [cesar.nieto@outlook.com](mailto:cesar.nieto@outlook.com).
- **Profiles:** [LinkedIn](https://www.linkedin.com/in/cesarnpadilla) and [GitHub](https://github.com/CesarNPadilla).
- **Résumés:** [English](downloads/cesar-nieto-en.txt) and [Spanish](downloads/cesar-nieto-es.txt).

The website is a portfolio project demonstrating responsive HTML/CSS, bilingual content, accessibility features, and search/social metadata. The QA tools listed above describe the professional profile; this repository does not contain Selenium or Playwright test suites or a CI/CD workflow.

**Content status:** profile, career history, skills, and résumé downloads were updated from Cesar's supplied résumé. The projects section covers FamilySplitter, two local Saviynt frameworks, and this portfolio. Public projects link to GitHub. The proprietary Java/Selenium framework for Saviynt IAM is available by demo and private repository access request. Estimates remain labeled as estimates. AI-assisted automation and the estimated 70% reduction in design and coding effort refer specifically to the Saviynt Playwright framework. Pleasanton is the work location listed in the résumé; no availability, personal location, time-zone, or work-authorization claim is inferred.

## Implementation

The site uses static HTML and one shared CSS stylesheet. There is no package installation, build command, backend, database, or required environment configuration. Contact links open the visitor's email application.

Features implemented in the source include:

- Separate English and Spanish pages with reciprocal language links.
- Responsive layouts and navigation using CSS Grid, Flexbox, and media queries.
- Automatic light/dark styling based on the visitor's system preference.
- Semantic sections, a keyboard skip link, visible focus styles, descriptive image text, and reduced-motion support.
- An optimized portrait with AVIF and WebP sources and a JPEG fallback.
- Page descriptions, canonical URLs, language alternatives, Open Graph metadata, and Person structured data.
- Downloadable UTF-8 text résumés.

The design is adapted from **Miniport by HTML5 UP**. Original template assets remain in the repository for reference, but the current pages do not load their JavaScript, icon fonts, or original stylesheet.

## Repository guide

| Path | Purpose |
| --- | --- |
| `index.html` | English page, content, links, and metadata |
| `es/index.html` | Spanish page, content, links, and metadata |
| `assets/css/site.css` | Active shared styles, themes, and responsive behavior |
| `images/portrait.avif`, `.webp`, `.jpg` | Portrait variants used by both pages |
| `downloads/cesar-nieto-en.txt` | English résumé source |
| `downloads/cesar-nieto-en.pdf` | PDF résumé linked from both pages (English) |
| `downloads/cesar-nieto-es.txt` | Spanish résumé |
| `.nojekyll` | Disables Jekyll processing when served through GitHub Pages |
| `SITE_UPDATE.md` | Previous update notes and verification record; includes historical source snapshots |
| `LICENSE.txt` | Template license terms |
| `README.txt` | Original Miniport documentation and credits |
| Other files under `assets/` and `images/` | Retained template/reference assets; check page references before changing them |

For a code review, start with the two HTML pages and `assets/css/site.css`. The actual source files are authoritative; source snapshots in `SITE_UPDATE.md` may become outdated as the site changes.

## Run locally

Prerequisites: Git to clone the repository, a browser, and Python 3 if using the preview command below. Python is only a convenient local server, not a website dependency.

```powershell
git clone https://github.com/CesarNPadilla/CesarNieto.me.git
cd CesarNieto.me
python -m http.server 8000 --bind 127.0.0.1
```

On Windows, use `py -m http.server 8000 --bind 127.0.0.1` if Python is available through the `py` launcher instead.

Open the English page at <http://localhost:8000/> and the Spanish page at <http://localhost:8000/es/>. Stop the server with `Ctrl+C`. An editor's static preview server can also serve the repository root.

## Update the website

1. **Edit both languages.** Update `index.html` and `es/index.html` together so that profile, skills, project, experience, and contact details stay consistent. Preserve each page's language and translate headings, descriptions, image text, and accessibility labels as needed.
2. **Complete the profile.** Replace `[CONFIRM]` fields with approved information. Add employment dates and responsibilities, and describe projects with a repository link, your contribution, tools used, and supported results. Publish only details you can substantiate.
3. **Update the résumés.** Edit both files in `downloads/` and save them as UTF-8. If replacing them with PDFs, add the files and update the download links and draft notices in both HTML pages. Remove draft labels only after the content is complete.
4. **Change appearance in the active stylesheet.** Edit `assets/css/site.css`; its `:root` variables define the base palette, and its media queries handle dark mode, small screens, and reduced motion. The original `main.css` and Sass files do not control the current pages.
5. **Replace the portrait consistently.** Update all three portrait formats from the same image. Keep the HTML dimensions and Open Graph image dimensions accurate if the image size changes, and retain descriptive alternative text in both languages.
6. **Keep links and metadata aligned.** Update email/profile links and Person structured data when contact details change. If the domain changes, update canonical, `hreflang`, `og:url`, `og:image`, and structured-data URLs in both pages. English links use `./` paths; Spanish links use `../` to reach shared assets.
7. **Preview and review the diff.** Run the checks below, then commit the intended changes. Keep template attribution and license information intact.

To locate pending fields and domain references from the repository root:

```powershell
Select-String -Path index.html, es/index.html, downloads/*.txt -Pattern '\[CONFIRM\]', 'pending', 'provisional', 'cesarnieto.me'
git diff --check
git diff
```

## Verify changes

There is currently no automated test suite or CI workflow in this repository. Use the following manual checks after content or styling changes:

- Open `/` and `/es/`; verify translated content and language switching.
- Check narrow mobile and desktop widths, plus browser zoom, for readable content and horizontal overflow.
- Check light and dark system themes for legible text and links.
- Navigate with the keyboard; verify the skip link, visible focus, section links, and contact/download links.
- Enable reduced motion and confirm that anchor navigation does not animate.
- Confirm the portrait, stylesheet, and both résumé downloads load successfully; check the browser console and network panel for errors.
- Review page titles, descriptions, canonical/language URLs, and structured data after changing identity or domain information.
- Check for remaining placeholders and draft notices before publishing a completed profile.
- Run `git diff --check` to catch whitespace errors before committing.

`SITE_UPDATE.md` records earlier local browser verification. It is not an automated test result for future changes or a full accessibility certification.

## Publish

The repository can be served by a static host without a build step. For a branch-based GitHub Pages deployment:

1. Complete the intended content and verify the site locally.
2. Commit and push the HTML pages, active stylesheet, portrait assets, downloads, `.nojekyll`, and license file.
3. Configure the repository's Pages settings to serve the publishing branch from its root folder.
4. If using `cesarnieto.me`, configure the custom domain, required DNS records, and HTTPS in the hosting settings. Ensure the domain matches the URLs in both HTML pages.
5. Verify `/`, `/es/`, language links, contact links, assets, and résumé downloads on the deployed site.

GitHub Pages publishes from `main` at the repository root. The checked-in `CNAME` contains the custom domain; DNS is managed through Cloudflare. If deploying under a repository subpath rather than a custom domain, adjust absolute metadata URLs to include that subpath.

## Attribution and license

Adapted from **Miniport by HTML5 UP**, under the **Creative Commons Attribution 3.0** terms in [LICENSE.txt](LICENSE.txt). Preserve the visible HTML5 UP credit and license links when updating or redistributing the adapted site. Original template credits are retained in [README.txt](README.txt).
