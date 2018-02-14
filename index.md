---
layout: default
---

<section class="gallery" id="gallery">
  <section class="gallery-cell">
    <div class="hero">
      <div class="hero-box">
        <h1 class="hero-name" data-parallax data-friction="60">Bartosz<br> Łaniewski</h1>
        <h2 class="hero-desc" data-parallax data-friction="60">Developer & Designer, 19 years old, from Poland</h2>
      </div>

      <div id="shapes-container" aria-hidden="true"></div>
    </div>
  </section>

  {% for project in site.data.projects %}
    <section class="gallery-cell">
      <div class="gallery-images">
        {% for image in project.images %}
          <img class="gallery-image {{ image.type }}"
            alt="{{ project.name }} - {{ image.type }} image"
            src="/assets/images/placeholder.png"
            data-flickity-lazyload="{{ image.path }}">
        {% endfor %}
      </div>

      <div class="gallery-meta">
        <h2 class="gallery-meta-name">{{ project.name }}</h2>
        <h3 class="gallery-meta-desc">{{ project.desc }}</h3>
        <a class="button" href="{{ project.path }}" tabindex="-1">Check it out</a>
      </div>
    </section>
  {% endfor %}
</section>

<main class="content grid" property="mainContentOfPage" typeof="WebPageElement">
  {% for repository in site.data.repositories %}
    <article class="xs-12 sm-6 lg-4" data-repo-name="{{ repository.name }}">
      <a class="box is-hoverable" target="_blank" rel="noopener noreferrer" href="{{ repository.path }}">
        <h4 class="box-name">
          {{ repository.name }}
          <span class="is-right box-meta" data-repo-stars></span>
          <span class="is-right box-meta" data-repo-forks></span>
        </h4>

        <p class="box-desc">{{ repository.desc }}</p>

        {% for keyword in repository.keywords %}
          <strong class="keyword">{{ keyword }}</strong>
        {% endfor %}
      </a>
    </article>
  {% endfor %}
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.0.10/flickity.pkgd.min.js"></script>
<script src="{{ "/assets/scripts/index.js" | relative_url }}"></script>
