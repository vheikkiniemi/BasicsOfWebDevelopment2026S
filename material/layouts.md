> [!NOTE]
> This material was created with the help of ChatGPT and Copilot.

# Common Web Page Layouts

*Layout* refers to how page elements, such as navigation, main content, and a sidebar, are arranged on the screen. A website often uses several layouts: for example, the home page may have a different layout from an article page.

| Layout | Typical structure | Particularly suitable for |
|---|---|---|
| **Single column** | Header → content → footer | Articles, instructions, and mobile views |
| **Two columns** | Main content + sidebar | Blogs, documentation, and course websites |
| **Card grid** | Similar content displayed as cards side by side | Galleries, product listings, and assignment lists |
| **Section-based home page** | Hero section → content sections → call to action | Business websites, portfolios, and campaign pages |
| **Dashboard** | Navigation + multiple information panels | Administration interfaces and monitoring pages |
| **Split layout** | Two large areas side by side | Introduction pages combining an image and text |

## What Do These Look Like in Practice?

A **single-column layout** guides the reader through the content from top to bottom. The content often has a maximum width to keep lines of text readable.

A **two-column layout** separates the main content from supporting information. For example, course instructions may appear on the left and a table of contents on the right. On narrow screens, the columns are usually stacked vertically.

In a **card grid**, each card represents one item. A card may contain an image, a heading, a short description, and a link. A gallery page with three images is a good example.

A **section-based home page** introduces its topic step by step. The top section immediately explains what the page is about; sections further down may present features, examples, and contact details.

A **dashboard** presents multiple pieces of information that are easy to scan. Its design should clearly distinguish the most important information from less important details.

## Shared Basic Structure

Most of these layouts use the same HTML regions:

```html
<header>...</header>
<nav>...</nav>
<main>
  <section>...</section>
</main>
<footer>...</footer>
```

The layout is implemented using CSS. **Flexbox** is useful for arranging navigation links or a single row of cards. **CSS Grid** is particularly suitable for columns and card grids. *Responsiveness* is also an essential part of layout design: the page should work on both wide and narrow screens.

# HTML Structure Examples

Below are six simplified HTML examples. They show the **content structure**; columns and grids are created using CSS. Place these examples inside the `<body>` element of a standard HTML page.

## 1. Single Column

The content flows from top to bottom in a single column.

```html
<header>
  <h1>Learning Journal</h1>
</header>

<nav aria-label="Main navigation">
  <a href="index.html">Home</a>
  <a href="about.html">About Me</a>
</nav>

<main>
  <article>
    <h2>My First Project</h2>
    <p>Here I describe what I have learned.</p>
  </article>
</main>

<footer>
  <p>Ville Heikkiniemi</p>
</footer>
```

## 2. Two Columns

A sidebar provides supporting information alongside the main content.

```html
<header>
  <h1>Course Instructions</h1>
</header>

<main class="two-column-layout">
  <article>
    <h2>Assignment 1</h2>
    <p>Here are the instructions for the assignment.</p>
  </article>

  <aside>
    <h2>Useful Links</h2>
    <ul>
      <li><a href="materials.html">Learning Materials</a></li>
      <li><a href="schedule.html">Schedule</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>Basics of Web Development</p>
</footer>
```

## 3. Card Grid

Similar content items form a collection of cards.

```html
<header>
  <h1>Projects</h1>
</header>

<main>
  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">My Projects</h2>

    <div class="card-grid">
      <article class="card">
        <h3>Project 1</h3>
        <p>A description of the first project.</p>
      </article>

      <article class="card">
        <h3>Project 2</h3>
        <p>A description of the second project.</p>
      </article>

      <article class="card">
        <h3>Project 3</h3>
        <p>A description of the third project.</p>
      </article>
    </div>
  </section>
</main>
```

## 4. Section-Based Home Page

The page introduces its topic through a series of sections.

```html
<header>
  <nav aria-label="Main navigation">
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero">
    <h1>We Build Clear, Easy-to-Use Websites</h1>
    <p>Website design and development for small businesses.</p>
    <a href="#contact">Get in Touch</a>
  </section>

  <section id="services">
    <h2>Services</h2>
    <p>Explore what we offer.</p>
  </section>

  <section id="contact">
    <h2>Contact Details</h2>
    <p>Email: example@example.com</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 Example Company</p>
</footer>
```

## 5. Dashboard

Several information panels are displayed on the same page.

```html
<header>
  <h1>Device Monitoring</h1>
</header>

<nav aria-label="Main navigation">
  <a href="index.html">Overview</a>
  <a href="devices.html">Devices</a>
</nav>

<main>
  <h2>Overview</h2>

  <div class="dashboard-grid">
    <section class="dashboard-card">
      <h3>Active Devices</h3>
      <p>12</p>
    </section>

    <section class="dashboard-card">
      <h3>Latest Measurement</h3>
      <p>21.5 °C</p>
    </section>

    <section class="dashboard-card">
      <h3>Recent Events</h3>
      <ul>
        <li>Device 1 sent a measurement.</li>
        <li>Device 2 connected to the server.</li>
      </ul>
    </section>
  </div>
</main>
```

## 6. Split Layout

Two large content areas form a single introduction section.

```html
<header>
  <h1>My Portfolio</h1>
</header>

<main>
  <section class="split-layout" aria-labelledby="intro-heading">
    <div class="split-content">
      <h2 id="intro-heading">Hi, I’m a Web Developer</h2>
      <p>I design and build easy-to-use websites.</p>
      <a href="projects.html">View My Projects</a>
    </div>

    <div class="split-image">
      <img
        src="images/workspace.jpg"
        alt="A workspace with a laptop">
    </div>
  </section>
</main>
```

For example, the class `card-grid` indicates **which part is intended to become a grid**, but HTML alone does not determine the number of cards in each row. CSS does that.

# CSS Layout Examples

Below is a CSS example for each HTML structure above. Save your chosen example in a file called `style.css` and add the following line to the `<head>` section of your HTML file:

```html
<link rel="stylesheet" href="style.css">
```

**Shared foundation:** add this code at the beginning of your chosen CSS example. It defines the page’s basic colours and removes the browser’s default body margin.

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: #243047;
  background: #f5f7fa;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

header,
footer {
  padding: 1.5rem;
  background: #16324f;
  color: white;
}

header h1,
footer p {
  margin: 0;
}

nav {
  padding: 1rem 1.5rem;
  background: #e5edf5;
}

nav a {
  margin-right: 1rem;
  color: #16324f;
}

main {
  width: min(100% - 2rem, 1100px);
  margin: 2rem auto;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
```

## 1. Single Column

Limiting the content width keeps lines of text easy to read.

```css
main {
  max-width: 700px;
}

article {
  padding: 2rem;
  background: white;
  border-radius: 12px;
}

article h2 {
  margin-top: 0;
}
```

## 2. Two Columns

The main content receives more space than the sidebar. On narrow screens, the areas are stacked vertically.

```css
.two-column-layout {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(220px, 1fr);
  gap: 1.5rem;
}

.two-column-layout article,
.two-column-layout aside {
  padding: 2rem;
  background: white;
  border-radius: 12px;
}

.two-column-layout h2 {
  margin-top: 0;
}

@media (max-width: 700px) {
  .two-column-layout {
    grid-template-columns: 1fr;
  }
}
```

## 3. Card Grid

The cards automatically form as many columns as the available space allows.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1.5rem;
}

.card {
  padding: 1.5rem;
  background: white;
  border: 1px solid #d8e1ea;
  border-radius: 12px;
}

.card h3 {
  margin-top: 0;
}
```

## 4. Section-Based Home Page

Each section stands out as a separate area. The hero section has a more prominent background colour.

```css
main > section {
  padding: 3rem 2rem;
}

.hero {
  border-radius: 12px;
  background: #dcecf8;
}

.hero h1 {
  max-width: 650px;
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
}

#services,
#contact {
  margin-top: 1.5rem;
  border-radius: 12px;
  background: white;
}

.hero a {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background: #16324f;
  color: white;
  text-decoration: none;
}
```

## 5. Dashboard

The information panels form a grid. On narrow screens, they appear in a single column.

```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.dashboard-card {
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
}

.dashboard-card h3 {
  margin-top: 0;
}

.dashboard-card:nth-child(3) {
  grid-column: 1 / -1;
}

@media (max-width: 600px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }

  .dashboard-card:nth-child(3) {
    grid-column: auto;
  }
}
```

## 6. Split Layout

The text and image share the available space. On mobile screens, they are stacked vertically.

```css
.split-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  overflow: hidden;
  border-radius: 12px;
  background: white;
}

.split-content {
  align-self: center;
  padding: 3rem;
}

.split-content h2 {
  margin-top: 0;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
}

.split-image img {
  width: 100%;
  height: 100%;
  min-height: 350px;
  object-fit: cover;
}

@media (max-width: 700px) {
  .split-layout {
    grid-template-columns: 1fr;
  }

  .split-content {
    padding: 2rem;
  }

  .split-image img {
    min-height: 250px;
  }
}
```

If you try all the examples as separate pages, each page can have its own `style.css`: **the shared foundation + the CSS for that particular layout**.