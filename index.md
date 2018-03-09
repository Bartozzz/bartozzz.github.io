---
layout: default
title: Developer & Designer
---

{% include gallery.html %}

<main id="content" class="content grid" property="mainContentOfPage" typeof="WebPageElement">
  <header class="content-header">
    <h4 class="content-heading">Open-source projects</h4>
    <h5 class="content-subheading">Community is essential to me. I want to become the kind of developer that I would want to work with. That's why I share my knowledge, code, and time with others.</h5>
  </header>

  {% for repository in site.data.repositories %}
    <article class="xs-12 sm-6 lg-4" data-repo-name="{{ repository.name }}">
      <a class="box is-hoverable" target="_blank" rel="noopener noreferrer" href="{{ repository.path }}">
        <h4 class="box-name">
          {{ repository.name }}
          <span class="is-right box-meta" data-repo-stars></span>
          <span class="is-right box-meta" data-repo-forks></span>
        </h4>

        <p class="box-description">{{ repository.desc }}</p>

        {% for keyword in repository.keywords %}
          <strong class="keyword">{{ keyword }}</strong>
        {% endfor %}
      </a>
    </article>
  {% endfor %}

  <article class="xs-12 sm-6 lg-4" data-repo-name="{{ repository.name }}">
    <a class="box is-wide is-hoverable" target="_blank" rel="noopener noreferrer" href="https://github.com/Bartozzz">
      See more…
    </a>
  </article>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.0.10/flickity.pkgd.min.js"></script>
<script src="{{ "/assets/scripts/index.js" | relative_url }}"></script>
