---
layout: default
title: About
permalink: /about/
---

<style>
  @media print {
    h1, h2, h3, h4, h5, table, figure, details {
      page-break-after: avoid;

      margin: 12px 0 !important;
      padding: 0 !important;
    }

    .header,
    .footer,
    .about-header {
      display: none;
    }

    .about-section {
      display: block;
    }

    .box,
    .content {
      border: 0;
      margin: 0;
      padding: 0;
    }

    .box {
      box-shadow: none;
    }

    .keyword {
      padding: 0;
      margin: 0 6px;
    }

    .keyword,
    .caps,
    .post p,
    .post li {
      color: black !important;
      font-size: 12px !important;
      font-family: Helvetica !important;
      text-transform: none !important;
    }

    .post p,
    .post ul {
      margin-top: 12px;
    }

    .post li {
      margin: 0 0 0 16px !important;
    }

    a[href^="http://"]:after,
    a[href^="https://"]:after {
      content: " (" attr(href) ")";
    }

    @page {
      margin: 1cm;
    }
  }
</style>

<main class="content about" itemscope itemtype="http://schema.org/Person">
  <header class="about-header">
    <h1 itemprop="name">Bartosz Łaniewski</h1>
    <link itemprop="sameAs" href="https://github.com/Bartozzz">
    <link itemprop="sameAs" href="https://dribbble.com/bartozzz">
    <link itemprop="sameAs" href="https://facebook.com/laniewski.bartozzz">
    <link itemprop="sameAs" href="https://youtube.com/channel/UCIC1vaSJwSJ2sqKWC3wTTmQ">

    <h2>Creative designer & developer at work.<br> Passionate mathematician at home.</h2>
  </header>

  <section class="about-section">
    <h3>Summary</h3>

    <div class="about-content post">
      <p>I have excellent knowledge of front-end development. I’m comfortable in new technologies such as CSS Modules, CSS Preprocessors, PostCSS, Javascript inline styling as well as build tools such as Gulp and Webpack. I am confident in understanding documentation when introducing a new framework or library.</p>

      <p>Beyond front-end, I am passionate about creating robust, scalable, and secure systems. As a fullstack developer, I can integrate user-facing elements with server side logic. I adhere to the best infosec and devops practices. I always build reusable back-end code and libraries for future use.</p>

      <ul>
        <li>I am passionate about developing creative tools that help create stunning content.</li>
        <li>I easily adapt to change and I am familiar with an agile development process.</li>
        <li>I love to work within a team on an outstanding product and see it grow.</li>
        <li>I can work autonomously and without supervision.</li>
        <li>I have a passion for technology and design.</li>
      </ul>
    </div>
  </section>

  <section class="about-section">
    <h3>Education</h3>

    <div class="about-content post">
      <details class="box">
        <summary class="box-header caps">
          <span itemprop="alumniOf" itemscope itemtype="http://schema.org/EducationalOrganization">
            <link href="https://www.univ-paris5.fr/" itemprop="url">
            <span itemprop="name">Université Paris Descartes</span>
          </span>

          <time class="keyword is-right">now</time>
        </summary>

        <p>I joined Paris Descartes in 2017. Beside my main field of interest, I have additionally attended Economy cursus during the first semester. I had the opportunity to integrate IT Excellence Project where I've met a lot of great people.</p>

        <ul>
          <li>Computer-Science</li>
          <li>Mathematics</li>
          <li>Physics</li>
        </ul>
      </details>
    </div>
  </section>

  <section class="about-section">
    <h3>Experience</h3>

    <div class="about-content post">
      <details class="box">
        <summary class="box-header caps">
          Fullstack Developer @ <span itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
            <link href="https://beertime.me/" itemprop="url">
            <a itemprop="name" href="https://beertime.me/" target="_blank" rel="noopener noreferrer">Beertime</a>
          </span>

          <time class="keyword is-right">2016 - 2018</time>
        </summary>

        <p>Beertime is a location-based social search app which allows users to go out for a beer with people nearby. Our algorithm attempts to find the best matches depending on the user's individual preferences. Information available to the users is based on a profile picture, a short bio that users write themselves and their hobbies.</p>

        <ul>
          <li>Developed the back-end in Node.js, with Sequelize.js/Express.js/Socket.io as main stack.</li>
          <li>Designed the front-end using React.js, including extensive unit and end-to-end testing.</li>
          <li>Migrated the front-end using data.js to a Firebase-based back-end.</li>
        </ul>
      </details>

      <details class="box">
        <summary class="box-header caps">
          Front-end Developer @ <span itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
            <link href="https://findsitandeat.com/" itemprop="url">
            <a itemprop="name" href="https://findsitandeat.com/" target="_blank" rel="noopener noreferrer">FindSit&Eat</a>
          </span>

          <time class="keyword is-right">2017</time>
        </summary>

        <div class="box-content post">
          <p>FindSit&Eat provides an easy way to find the best food offers and places to eat. The app can find the nearest restaurants by using user's location.</p>

          <ul>
            <li>Created a responsive template with respect to specifications.</li>
            <li>Implemented Flux architecture for a RESTful API.</li>
            <li>Integrated with PayU's payment system.</li>
          </ul>
        </div>
      </details>

      <details class="box">
        <summary class="box-header caps">
          Front-end Developer @ <span itemprop="worksFor" itemscope itemtype="http://schema.org/Organization">
            <span itemprop="name">Foodie</span>
          </span>

          <time class="keyword is-right">2016</time>
        </summary>

        <div class="box-content post">
          <p>Choose healthy, local food with Foodie. Don't waste time to decipher food labels. You don’t have to read every last word on the package while you’re shopping with this app.</p>

          <ul>
            <li>Designed a template according to Material Design specifications</li>
            <li>Created the front-end using Angular.js</li>
          </ul>
        </div>
      </details>
    </div>
  </section>

  <section class="about-section">
    <h3>Skills</h3>

    <div class="about-content post">
      <ul>
        <li>
          <span class="is-bold">Foreign languages:</span><br>
          <span class="keyword">Polish</span>
          <span class="keyword">French</span>
          <span class="keyword">English</span>
        </li>

        <li>
          <span class="is-bold">Programming languages:</span><br>
          <span class="keyword">JavaScript</span>
          <span class="keyword">TypeScript</span>
          <span class="keyword">CoffeeScript</span>
          <span class="keyword">PHP</span>
        </li>

        <li>
          <span class="is-bold">Databases:</span><br>
          <span class="keyword">PostgreSQL</span>
          <span class="keyword">MongoDB</span>
          <span class="keyword">MySQL</span>
          <span class="keyword">NoSQL</span>
        </li>

        <li>
          <span class="is-bold">Frameworks:</span><br>
          <span class="keyword">Koa.js</span>
          <span class="keyword">Express.js</span>
          <span class="keyword">React.js</span>
          <span class="keyword">Angular.js</span>
          <span class="keyword">ElasticSearch</span>
        </li>

        <li>
          <span class="is-bold">Tools:</span><br>
          <span class="keyword">Git</span>
          <span class="keyword">Gulp</span>
          <span class="keyword">Webpack</span>
          <span class="keyword">MacOS</span>
          <span class="keyword">Linux</span>
        </li>
      </ul>
    </div>
  </section>
</main>

<script>
  // https://www.tjvantoll.com/2012/06/15/detecting-print-requests-with-javascript/
  (function() {
    var beforePrint = function() {
      document.querySelectorAll("details").forEach(function (detail) {
        detail.open = true;
      });
    };

    if (window.matchMedia) {
      window.matchMedia("print").addListener(function (list) {
        if (list.matches) {
          beforePrint();
        }
      });
    }

    window.onbeforeprint = beforePrint;
  }());
</script>
