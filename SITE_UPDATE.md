# Site update

The source audit was delivered before edits. Projects remain pending at your request.

## Five highest-impact changes

1. The intro identifies the QA automation role and confirmed stack immediately.
2. Email, GitHub and LinkedIn links work; the backend contact form is gone.
3. English and Spanish pages use the same section order and reciprocal language links.
4. Zoom, keyboard focus, responsive navigation, color themes and reduced motion are supported.
5. Runtime template dependencies are replaced by a single stylesheet and optimized portrait assets.

## Dependencies no longer loaded

- jQuery 3.3.1: native links and CSS provide the required behavior.
- jquery.scrolly: native anchor scrolling respects reduced motion.
- browser.js: no browser detection is needed.
- breakpoints.js: CSS media queries handle responsive layout.
- util.js and main.js: template initialization and animation are unnecessary.
- Font Awesome: plain text links replace the icon font.
- Google Fonts: system fonts avoid external font requests.
- Original main.css: site.css replaces the template grid, component and form styles.

Original dependency files remain on disk for reference, but neither page requests them. LICENSE.txt and visible HTML5 UP attribution remain. Existing user-modified images were preserved.

## Pending information

| Item | Where | Provide |
|---|---|---|
| [CONFIRM] seniority | Intro, both languages | Your preferred level/title |
| [CONFIRM] location / working time zone | Intro, both languages | Details you want public |
| [CONFIRM] programming languages | Skills, both languages | Automation programming languages |
| [CONFIRM] CI/CD tools | Skills, both languages | Named platforms and tools |
| [CONFIRM] practices | Skills, both languages | Confirmed strategy and practices |
| [CONFIRM] career history | Experience, both languages | Employer/client, role, dates, responsibilities |
| Draft resume | Intro downloads | Approved complete resume; replace TXT links with PDF if supplied |
| Projects pending | Projects, both languages | Public repositories, your contribution and supported outcomes |
| GitLab omitted | Contact | Actual profile URL if desired |
| Production URL | Canonical, hreflang, social metadata, JSON-LD | Confirm https://cesarnieto.me or replace all occurrences |

No project names, outcomes, metrics, work authorization or unverified client roles were added. The resume downloads are real UTF-8 text files explicitly labeled as drafts. The portrait is the only image; it loads eagerly because it is above the fold. There are no below-fold images requiring lazy loading.

## Verification

Chromium: English/Spanish, light/dark, 320px/1280px widths. No horizontal overflow; one h1; images load; fragment links resolve; reduced-motion uses auto scrolling; first keyboard stop is the skip link. Local assets and downloads resolve. Desktop and mobile layouts were visually inspected. This is not a full WCAG certification or Lighthouse run.

## GitHub Pages deployment

1. Fill the confirmation fields and replace the draft resume with your approved version.
2. Set canonical, hreflang and social URLs to your production origin.
3. Commit and push the pages, stylesheet, portrait variants, downloads, .nojekyll and LICENSE.txt.
4. In repository Settings > Pages, deploy from your branch and root folder; configure the custom domain and HTTPS if used.
5. Check / and /es/, both themes, profile links and resume downloads on the live site.

## Full updated text files

### index.html

```html
<!doctype html>
<!-- Adapted from Miniport by HTML5 UP. CC BY 3.0; see LICENSE.txt. -->
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>Cesar Nieto | Software QA Engineer</title>
  <meta name="description" content="I specialize in test automation with Selenium, Playwright, Cucumber, Gherkin and CI/CD pipelines. Contact me in English or Spanish.">
  <link rel="canonical" href="https://cesarnieto.me/">
  <link rel="alternate" hreflang="en" href="https://cesarnieto.me/">
  <link rel="alternate" hreflang="es" href="https://cesarnieto.me/es/">
  <link rel="alternate" hreflang="x-default" href="https://cesarnieto.me/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Cesar Nieto | Software QA Engineer">
  <meta property="og:description" content="I specialize in test automation with Selenium, Playwright, Cucumber, Gherkin and CI/CD pipelines. Contact me in English or Spanish.">
  <meta property="og:url" content="https://cesarnieto.me/">
  <meta property="og:locale" content="en_US">
  <meta property="og:locale:alternate" content="es_ES">
  <meta property="og:image" content="https://cesarnieto.me/images/portrait.jpg">
  <meta property="og:image:width" content="640">
  <meta property="og:image:height" content="640">
  <meta property="og:image:alt" content="Cesar Nieto">
  <meta name="twitter:card" content="summary">
  <link rel="stylesheet" href="./assets/css/site.css">
  <script type="application/ld+json">{"@context": "https://schema.org", "@type": "Person", "name": "Cesar Nieto", "url": "https://cesarnieto.me/", "jobTitle": "Software QA Engineer", "sameAs": ["https://github.com/CesarNPadilla", "https://www.linkedin.com/in/cesarnpadilla"]}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <nav class="nav" aria-label="Main">
    <div class="container">
      <a href="#intro">Intro</a>
      <a href="#work">What I work on</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
      <a class="language" href="./es/" lang="es" hreflang="es">Español</a>
    </div>
  </nav>
  <main id="main" tabindex="-1">
    <section id="intro" aria-labelledby="intro-title">
      <div class="container intro">
        <picture>
          <source srcset="./images/portrait.avif" type="image/avif">
          <source srcset="./images/portrait.webp" type="image/webp">
          <img class="portrait" src="./images/portrait.jpg" alt="Portrait of Cesar Nieto" width="640" height="640" fetchpriority="high">
        </picture>
        <div>
          <p class="eyebrow">Software QA Engineer · Test automation</p>
          <h1 id="intro-title">Cesar Nieto</h1>
          <p class="lead">I'm Cesar Nieto. I specialize in test automation with Selenium and Playwright. I work with Cucumber, Gherkin and CI/CD pipelines, and I work in English and Spanish.</p>
          <p class="meta">Seniority: [CONFIRM] · Location / working time zone: [CONFIRM]</p>
          <div class="actions">
            <a class="button" href="mailto:cesar.nieto@outlook.com">Contact me</a>
            <a href="./downloads/cesar-nieto-en.txt" download aria-describedby="resume-note">Download résumé</a>
          </div>
          <p class="note" id="resume-note">Draft résumé: confirmed profile only; career details pending.</p>
        </div>
      </div>
    </section>
    <section id="work" aria-labelledby="work-title"><div class="container">
      <h2 id="work-title">What I work on</h2>
      <div class="grid">
        <article class="card"><h3>Browser test automation</h3><p>I work with Selenium and Playwright to automate software tests.</p></article>
        <article class="card"><h3>Test scenarios</h3><p>I use Cucumber and Gherkin to describe test scenarios.</p></article>
        <article class="card"><h3>Tests in delivery pipelines</h3><p>I work with test automation and CI/CD pipelines.</p></article>
      </div>
    </div></section>
    <section id="skills" aria-labelledby="skills-title"><div class="container">
      <h2 id="skills-title">Skills</h2>
      <div class="grid">
        <div class="card"><h3>Test automation</h3><p>Selenium · Playwright · Cucumber</p></div>
        <div class="card"><h3>Languages</h3><p>Gherkin (scenario language). Programming languages: [CONFIRM]</p></div>
        <div class="card"><h3>CI/CD & tooling</h3><p>CI/CD pipelines. Platforms and tools: [CONFIRM]</p></div>
        <div class="card"><h3>Practices</h3><p>Test automation. Test strategy and other practices: [CONFIRM]</p></div>
        <div class="card"><h3>Languages spoken</h3><p>English · Spanish</p></div>
      </div>
    </div></section>
    <section id="projects" aria-labelledby="projects-title"><div class="container">
      <h2 id="projects-title">Projects</h2>
      <div class="pending"><p>Project write-ups are pending while I make my repositories public. For now, you can visit my GitHub profile.</p>
        <a href="https://github.com/CesarNPadilla">View my GitHub profile</a>
      </div>
    </div></section>
    <section id="experience" aria-labelledby="experience-title"><div class="container">
      <h2 id="experience-title">Experience</h2>
      <p>I work in software quality assurance, specializing in test automation.</p><p class="note">[CONFIRM] Employer or client, role, dates, and a short description of my responsibilities.</p>
      <a href="https://www.linkedin.com/in/cesarnpadilla">View my LinkedIn profile</a>
    </div></section>
    <section id="contact" aria-labelledby="contact-title"><div class="container">
      <h2 id="contact-title">Contact</h2><p>You can contact me in English or Spanish about software QA and test automation.</p>
      <address>
        <a href="mailto:cesar.nieto@outlook.com">cesar.nieto@outlook.com</a><br>
        <a href="https://www.linkedin.com/in/cesarnpadilla">LinkedIn</a><br>
        <a href="https://github.com/CesarNPadilla">GitHub</a>
      </address>
    </div></section>
  </main>
  <footer><div class="container">
    <p>© Cesar Nieto</p>
    <p>Adapted from Miniport by <a href="https://html5up.net">HTML5 UP</a> · <a href="./LICENSE.txt">CC BY 3.0</a></p>
  </div></footer>
</body>
</html>

```

### es/index.html

```html
<!doctype html>
<!-- Adapted from Miniport by HTML5 UP. CC BY 3.0; see LICENSE.txt. -->
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <title>Cesar Nieto | Ingeniero de QA de software</title>
  <meta name="description" content="Me especializo en automatización de pruebas con Selenium, Playwright, Cucumber, Gherkin y pipelines de CI/CD. Trabajo en español e inglés.">
  <link rel="canonical" href="https://cesarnieto.me/es/">
  <link rel="alternate" hreflang="en" href="https://cesarnieto.me/">
  <link rel="alternate" hreflang="es" href="https://cesarnieto.me/es/">
  <link rel="alternate" hreflang="x-default" href="https://cesarnieto.me/">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Cesar Nieto | Ingeniero de QA de software">
  <meta property="og:description" content="Me especializo en automatización de pruebas con Selenium, Playwright, Cucumber, Gherkin y pipelines de CI/CD. Trabajo en español e inglés.">
  <meta property="og:url" content="https://cesarnieto.me/es/">
  <meta property="og:locale" content="es_ES">
  <meta property="og:locale:alternate" content="en_US">
  <meta property="og:image" content="https://cesarnieto.me/images/portrait.jpg">
  <meta property="og:image:width" content="640">
  <meta property="og:image:height" content="640">
  <meta property="og:image:alt" content="Cesar Nieto">
  <meta name="twitter:card" content="summary">
  <link rel="stylesheet" href="../assets/css/site.css">
  <script type="application/ld+json">{"@context": "https://schema.org", "@type": "Person", "name": "Cesar Nieto", "url": "https://cesarnieto.me/", "jobTitle": "Software QA Engineer", "sameAs": ["https://github.com/CesarNPadilla", "https://www.linkedin.com/in/cesarnpadilla"]}</script>
</head>
<body>
  <a class="skip" href="#main">Saltar al contenido</a>
  <nav class="nav" aria-label="Principal">
    <div class="container">
      <a href="#intro">Inicio</a>
      <a href="#work">En qué trabajo</a>
      <a href="#skills">Habilidades</a>
      <a href="#projects">Proyectos</a>
      <a href="#experience">Experiencia</a>
      <a href="#contact">Contacto</a>
      <a class="language" href="../" lang="en" hreflang="en">English</a>
    </div>
  </nav>
  <main id="main" tabindex="-1">
    <section id="intro" aria-labelledby="intro-title">
      <div class="container intro">
        <picture>
          <source srcset="../images/portrait.avif" type="image/avif">
          <source srcset="../images/portrait.webp" type="image/webp">
          <img class="portrait" src="../images/portrait.jpg" alt="Retrato de Cesar Nieto" width="640" height="640" fetchpriority="high">
        </picture>
        <div>
          <p class="eyebrow">Ingeniero de QA de software · Automatización de pruebas</p>
          <h1 id="intro-title">Cesar Nieto</h1>
          <p class="lead">Soy Cesar Nieto y me especializo en automatización de pruebas con Selenium y Playwright. Trabajo con Cucumber, Gherkin y pipelines de CI/CD. Puedo colaborar en español e inglés.</p>
          <p class="meta">Nivel profesional: [CONFIRM] · Ubicación / zona horaria de trabajo: [CONFIRM]</p>
          <div class="actions">
            <a class="button" href="mailto:cesar.nieto@outlook.com">Contactar</a>
            <a href="../downloads/cesar-nieto-es.txt" download aria-describedby="resume-note">Descargar currículum</a>
          </div>
          <p class="note" id="resume-note">Currículum provisional: solo contiene datos confirmados; falta el historial profesional.</p>
        </div>
      </div>
    </section>
    <section id="work" aria-labelledby="work-title"><div class="container">
      <h2 id="work-title">En qué trabajo</h2>
      <div class="grid">
        <article class="card"><h3>Pruebas automatizadas en el navegador</h3><p>Uso Selenium y Playwright para automatizar pruebas de software.</p></article>
        <article class="card"><h3>Escenarios de prueba</h3><p>Uso Cucumber y Gherkin para describir escenarios de prueba.</p></article>
        <article class="card"><h3>Pruebas en los procesos de entrega</h3><p>Trabajo con automatización de pruebas y pipelines de CI/CD.</p></article>
      </div>
    </div></section>
    <section id="skills" aria-labelledby="skills-title"><div class="container">
      <h2 id="skills-title">Habilidades</h2>
      <div class="grid">
        <div class="card"><h3>Automatización de pruebas</h3><p>Selenium · Playwright · Cucumber</p></div>
        <div class="card"><h3>Lenguajes</h3><p>Gherkin (lenguaje de escenarios). Lenguajes de programación: [CONFIRM]</p></div>
        <div class="card"><h3>CI/CD y herramientas</h3><p>Pipelines de CI/CD. Plataformas y herramientas: [CONFIRM]</p></div>
        <div class="card"><h3>Prácticas</h3><p>Automatización de pruebas. Estrategia de pruebas y otras prácticas: [CONFIRM]</p></div>
        <div class="card"><h3>Idiomas</h3><p>Español · Inglés</p></div>
      </div>
    </div></section>
    <section id="projects" aria-labelledby="projects-title"><div class="container">
      <h2 id="projects-title">Proyectos</h2>
      <div class="pending"><p>Estoy preparando las descripciones de mis proyectos mientras hago públicos los repositorios. Por ahora, puedes visitar mi perfil de GitHub.</p>
        <a href="https://github.com/CesarNPadilla">Ver mi perfil de GitHub</a>
      </div>
    </div></section>
    <section id="experience" aria-labelledby="experience-title"><div class="container">
      <h2 id="experience-title">Experiencia</h2>
      <p>Trabajo en aseguramiento de la calidad de software, con especialidad en automatización de pruebas.</p><p class="note">[CONFIRM] Empresa o cliente, puesto, fechas y una breve descripción de mis responsabilidades.</p>
      <a href="https://www.linkedin.com/in/cesarnpadilla">Ver mi perfil de LinkedIn</a>
    </div></section>
    <section id="contact" aria-labelledby="contact-title"><div class="container">
      <h2 id="contact-title">Contacto</h2><p>Puedes escribirme en español o inglés para hablar de QA de software y automatización de pruebas.</p>
      <address>
        <a href="mailto:cesar.nieto@outlook.com">cesar.nieto@outlook.com</a><br>
        <a href="https://www.linkedin.com/in/cesarnpadilla">LinkedIn</a><br>
        <a href="https://github.com/CesarNPadilla">GitHub</a>
      </address>
    </div></section>
  </main>
  <footer><div class="container">
    <p>© Cesar Nieto</p>
    <p>Adaptado de Miniport, de <a href="https://html5up.net">HTML5 UP</a> · <a href="../LICENSE.txt">CC BY 3.0</a></p>
  </div></footer>
</body>
</html>

```

### assets/css/site.css

```css
/* Adapted from Miniport by HTML5 UP; attribution retained in each page. */
:root{color-scheme:light dark;--bg:#fff;--panel:#f3f5f7;--card:#fff;--text:#202b35;--muted:#465564;--accent:#086b91;--border:#ccd4dc;--nav:#252c33;--focus:#a64200}
*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:7rem}body{margin:0;background:var(--bg);color:var(--text);font:1rem/1.7 system-ui,-apple-system,"Segoe UI",sans-serif}a{color:var(--accent);text-underline-offset:.2em}a:hover{text-decoration-thickness:.15em}a:focus-visible{outline:3px solid var(--focus);outline-offset:5px}h1,h2,h3{line-height:1.2;color:var(--text)}h1{font-size:clamp(2.2rem,6vw,4rem);margin:.2em 0}h2{font-size:clamp(1.7rem,4vw,2.4rem)}h3{font-size:1.2rem}p{max-width:65ch}img{display:block;max-width:100%;height:auto}.container{width:min(70rem,100% - 3rem);margin:auto}.skip{position:absolute;left:1rem;top:-8rem;background:var(--bg);padding:1rem;z-index:10}.skip:focus{top:1rem}.nav{background:var(--nav);position:sticky;top:0;z-index:2;box-shadow:0 2px 5px #0003}.nav .container{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:.25rem}.nav a{color:#fff;display:inline-flex;align-items:center;min-height:48px;padding:.5rem .7rem;text-decoration:none;border-radius:.3rem}.nav a:hover,.nav a[aria-current]{background:#414c57}.nav a:focus-visible{outline-color:#ffc078;outline-offset:-3px}.language{margin-inline-start:auto}section{padding:clamp(3rem,7vw,6rem) 0;border-bottom:1px solid var(--border)}section:nth-child(even){background:var(--panel)}.intro{display:grid;grid-template-columns:minmax(0,1fr) minmax(15rem,2fr);align-items:center;gap:clamp(2rem,5vw,4rem)}.portrait{width:100%;max-width:20rem;border-radius:50%;box-shadow:0 4px 20px #0002}.eyebrow{font-weight:700;color:var(--accent);margin:0}.lead{font-size:clamp(1.1rem,2vw,1.3rem)}.meta,.note{color:var(--muted)}.actions{display:flex;flex-wrap:wrap;gap:1rem;align-items:center;margin-top:1.5rem}.button{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:.75rem 1.3rem;background:var(--accent);color:#fff;border-radius:.5rem;font-weight:650;text-decoration:none;box-shadow:0 2px 3px #0002}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,18rem),1fr));gap:1.5rem}.card{padding:1.5rem;background:var(--card);border:1px solid var(--border);border-radius:.4rem;box-shadow:0 3px 8px #0001}.card h3{margin-top:0}.card p:last-child{margin-bottom:0}ul{padding-inline-start:1.25rem}.pending{border-inline-start:4px solid var(--accent);padding:1rem 1.5rem;background:var(--card)}address{font-style:normal;overflow-wrap:anywhere}address a{display:inline-block;min-height:44px;padding:.4rem 0}footer{padding:2rem 0;color:var(--muted);font-size:.9rem}footer p{margin:.5rem 0}
@media(prefers-color-scheme:dark){:root{--bg:#171e25;--panel:#202932;--card:#25313b;--text:#f0f4f8;--muted:#c2ceda;--accent:#8dd8f6;--border:#52616f;--focus:#ffc078}.button{background:#096e94;color:#fff}}
@media(max-width:650px){.intro{grid-template-columns:1fr}.portrait{max-width:12rem;margin:auto}.container{width:calc(100% - 2rem)}.nav{position:relative}.language{margin-inline-start:0}.nav a{padding:.5rem}.intro .actions{align-items:stretch}.button{width:100%}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}

```

### downloads/cesar-nieto-en.txt

```text
Cesar Nieto
Software QA Engineer specializing in test automation

DRAFT · confirmed profile only; career details pending.

Tools: Selenium, Playwright, Cucumber, Gherkin, CI/CD pipelines
Working languages: English and Spanish
Email: cesar.nieto@outlook.com
GitHub: https://github.com/CesarNPadilla
LinkedIn: https://www.linkedin.com/in/cesarnpadilla

Seniority, location, work history, education and project details: pending confirmation.

```

### downloads/cesar-nieto-es.txt

```text
Cesar Nieto
Ingeniero de QA de software especializado en automatización de pruebas

PROVISIONAL · solo contiene datos confirmados; falta el historial profesional.

Herramientas: Selenium, Playwright, Cucumber, Gherkin, pipelines de CI/CD
Idiomas de trabajo: español e inglés
Correo: cesar.nieto@outlook.com
GitHub: https://github.com/CesarNPadilla
LinkedIn: https://www.linkedin.com/in/cesarnpadilla

Nivel profesional, ubicación, experiencia, formación y proyectos: pendientes de confirmación.

```

### .nojekyll

```text

```

Binary assets: images/portrait.avif (20,240 bytes), images/portrait.webp (21,658 bytes), images/portrait.jpg (40,017 bytes); each 640 x 640 pixels.
