> [!NOTE]
> The material was created with the help of ChatGPT and Copilot / Materiaali luotiin ChatGPT:n ja Copilotin avulla.

# Yleisimmät verkkosivujen asettelut

*Layout* tarkoittaa sitä, miten sivun osat, kuten navigaatio, pääsisältö ja sivupalkki, sijoitetaan näytölle. Samalla sivustolla käytetään usein useampaa asettelua: esimerkiksi etusivu voi olla erilainen kuin artikkelisivu.

| Asettelu | Tyypillinen rakenne | Sopii erityisesti |
|---|---|---|
| **Yksi palsta** | Otsake → sisältö → alatunniste | Artikkelit, ohjeet ja mobiilinäkymät |
| **Kaksi palstaa** | Pääsisältö + sivupalkki | Blogit, dokumentaatio ja kurssisivut |
| **Korttiruudukko** | Samankaltaiset sisällöt rinnakkaisina kortteina | Galleriat, tuotelistaukset ja tehtäväluettelot |
| **Etusivu osioina** | Aloitusosio → sisältöosiot → toimintakehote | Yrityssivut, portfoliot ja kampanjasivut |
| **Koontinäkymä** | Navigaatio + useita tietoalueita | Hallintapaneelit ja seurantasivut |
| **Jaettu näkymä** | Kaksi suurta aluetta vierekkäin | Esittelysivut, joissa yhdistyvät kuva ja teksti |

## Miltä nämä näyttävät käytännössä?

**Yksi palsta** ohjaa lukemaan sisältöä ylhäältä alas. Sisällölle annetaan usein enimmäisleveys, jotta pitkät tekstirivit pysyvät luettavina.

**Kaksi palstaa** erottaa varsinaisen sisällön ja sitä tukevat asiat. Esimerkiksi kurssiohje voi olla vasemmalla ja sisällysluettelo oikealla. Kapealla näytöllä palstat sijoitetaan yleensä allekkain.

**Korttiruudukossa** jokainen kortti edustaa yhtä kokonaisuutta. Kortissa voi olla kuva, otsikko, lyhyt kuvaus ja linkki. Kolmen kuvan galleriasivu on tästä hyvä esimerkki.

**Osioihin jaettu etusivu** esittelee aiheen vaiheittain. Yläosassa kerrotaan heti, mistä sivussa on kyse; alempana voidaan esitellä ominaisuuksia, esimerkkejä ja yhteystiedot.

**Koontinäkymä** asettaa useita tietoja helposti silmäiltäviksi. Sen suunnittelussa tärkeää on erottaa ensisijaiset tiedot vähemmän tärkeistä.

## Yhteinen perusrakenne

Useimmissa näistä asetteluista toistuvat samat HTML-alueet:

```html
<header>...</header>
<nav>...</nav>
<main>
  <section>...</section>
</main>
<footer>...</footer>
```

Asettelu toteutetaan CSS:llä. **Flexbox** sopii esimerkiksi navigaation ja yksittäisen korttirivin järjestämiseen. **CSS Grid** sopii erityisesti palstoihin ja korttiruudukkoihin. Käytännössä tärkeä osa asettelua on myös *responsiivisuus*: sivun tulee toimia sekä leveällä että kapealla näytöllä.

# HTML ja esimerkkejä rakenteesta

Alla on kuusi pelkistettyä HTML-esimerkkiä. Ne näyttävät **sisällön rakenteen**; palstat ja ruudukot syntyvät vasta CSS:llä. Esimerkkien `<main>` sijoitetaan tavallisen HTML-sivun `<body>`-elementin sisään.

## 1. Yksi palsta

Sisältö etenee yhtenä kokonaisuutena ylhäältä alas.

```html
<header>
  <h1>Oppimispäiväkirja</h1>
</header>

<nav aria-label="Päävalikko">
  <a href="index.html">Etusivu</a>
  <a href="about.html">Tietoa minusta</a>
</nav>

<main>
  <article>
    <h2>Ensimmäinen projektini</h2>
    <p>Tässä kerron, mitä olen oppinut.</p>
  </article>
</main>

<footer>
  <p>Ville Heikkiniemi</p>
</footer>
```

## 2. Kaksi palstaa

Pääsisällön rinnalla on sitä täydentävä sivupalkki.

```html
<header>
  <h1>Kurssin ohjeet</h1>
</header>

<main class="two-column-layout">
  <article>
    <h2>Tehtävä 1</h2>
    <p>Tässä on tehtävän varsinainen ohje.</p>
  </article>

  <aside>
    <h2>Hyödylliset linkit</h2>
    <ul>
      <li><a href="materials.html">Oppimateriaali</a></li>
      <li><a href="schedule.html">Aikataulu</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>Web-kehittämisen perusteet</p>
</footer>
```

## 3. Korttiruudukko

Samantyyppiset sisällöt muodostavat korttien joukon.

```html
<header>
  <h1>Projektit</h1>
</header>

<main>
  <section aria-labelledby="projects-heading">
    <h2 id="projects-heading">Omat projektini</h2>

    <div class="card-grid">
      <article class="card">
        <h3>Projekti 1</h3>
        <p>Ensimmäisen projektin kuvaus.</p>
      </article>

      <article class="card">
        <h3>Projekti 2</h3>
        <p>Toisen projektin kuvaus.</p>
      </article>

      <article class="card">
        <h3>Projekti 3</h3>
        <p>Kolmannen projektin kuvaus.</p>
      </article>
    </div>
  </section>
</main>
```

## 4. Etusivu osioina

Sivu esittelee aiheensa useassa peräkkäisessä osiossa.

```html
<header>
  <nav aria-label="Päävalikko">
    <a href="#services">Palvelut</a>
    <a href="#contact">Yhteystiedot</a>
  </nav>
</header>

<main>
  <section class="hero">
    <h1>Rakennamme selkeitä verkkosivuja</h1>
    <p>Suunnittelua ja toteutusta pienille yrityksille.</p>
    <a href="#contact">Ota yhteyttä</a>
  </section>

  <section id="services">
    <h2>Palvelut</h2>
    <p>Tutustu siihen, mitä tarjoamme.</p>
  </section>

  <section id="contact">
    <h2>Yhteystiedot</h2>
    <p>Sähköposti: esimerkki@example.com</p>
  </section>
</main>

<footer>
  <p>&copy; 2026 Esimerkkiyritys</p>
</footer>
```

## 5. Koontinäkymä

Useat tietoalueet esitetään samalla sivulla.

```html
<header>
  <h1>Laitteiden seuranta</h1>
</header>

<nav aria-label="Päävalikko">
  <a href="index.html">Yhteenveto</a>
  <a href="devices.html">Laitteet</a>
</nav>

<main>
  <h2>Yhteenveto</h2>

  <div class="dashboard-grid">
    <section class="dashboard-card">
      <h3>Aktiiviset laitteet</h3>
      <p>12</p>
    </section>

    <section class="dashboard-card">
      <h3>Viimeisin mittaus</h3>
      <p>21,5 °C</p>
    </section>

    <section class="dashboard-card">
      <h3>Viimeisimmät tapahtumat</h3>
      <ul>
        <li>Laite 1 lähetti mittauksen.</li>
        <li>Laite 2 yhdisti palvelimeen.</li>
      </ul>
    </section>
  </div>
</main>
```

## 6. Jaettu näkymä

Kaksi suurta sisältöaluetta muodostaa yhdessä yhden esittelyosion.

```html
<header>
  <h1>Oma portfolio</h1>
</header>

<main>
  <section class="split-layout" aria-labelledby="intro-heading">
    <div class="split-content">
      <h2 id="intro-heading">Hei, olen verkkokehittäjä</h2>
      <p>Suunnittelen ja toteutan helppokäyttöisiä sivuja.</p>
      <a href="projects.html">Katso projektini</a>
    </div>

    <div class="split-image">
      <img
        src="images/workspace.jpg"
        alt="Työpiste, jossa on kannettava tietokone">
    </div>
  </section>
</main>
```

Esimerkiksi luokka `card-grid` kertoo, **mikä osa on tarkoitus asettaa ruudukoksi**, mutta HTML ei yksin määrää korttien lukumäärää rivillä. Sen tekee CSS.

# CSS ja esimerkkejä rakenteesta

Alla on kuhunkin edellisen vastauksen HTML-rakenteeseen sopiva CSS-esimerkki. Voit tallentaa valitsemasi esimerkin tiedostoon `style.css` ja lisätä HTML-tiedoston `<head>`-osaan:

```html
<link rel="stylesheet" href="style.css">
```

**Yhteinen pohja:** lisää tämä valitsemasi esimerkin CSS:n alkuun. Se antaa sivulle perusvärit ja poistaa selaimen oletusmarginaalin.

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

## 1. Yksi palsta

Rajattu leveys pitää tekstirivit helposti luettavina.

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

## 2. Kaksi palstaa

Pääsisältö saa enemmän tilaa kuin sivupalkki. Kapealla näytöllä alueet siirtyvät allekkain.

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

## 3. Korttiruudukko

Kortit sijoittuvat automaattisesti niin moneen palstaan kuin käytettävissä oleva tila sallii.

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

## 4. Etusivu osioina

Jokainen osio erottuu omana kokonaisuutenaan. Aloitusosio saa voimakkaamman taustan.

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

## 5. Koontinäkymä

Tietoalueet muodostavat ruudukon. Kapealla näytöllä ne asettuvat yhteen palstaan.

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

## 6. Jaettu näkymä

Teksti ja kuva jakavat alueen. Mobiilissa ne näkyvät allekkain.

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

Jos kokeilet kaikkia esimerkkejä erillisinä sivuina, kullakin sivulla voi olla oma `style.css`: **yhteinen pohja + kyseisen asettelun CSS**.