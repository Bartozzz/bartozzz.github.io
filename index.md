---
layout: default
title: Developer & Designer
---

{% include gallery.html %}

<main id="content" class="content grid" itemprop="mainContentOfPage">
  <header class="content-header">
    <h2 class="content-heading">Open-source projects</h2>
    <h3 class="content-subheading">Community is essential to me. I want to become the kind of developer that I would want to work with. That's why I share my knowledge, code, and time with others.</h3>
  </header>

  {% for repository in site.data.repositories %}
    <article class="xs-12 sm-6 lg-4" data-repo-name="{{ repository.name }}" itemtype="http://schema.org/SoftwareSourceCode" itemscope>
      <link itemprop="codeRepository" href="{{ repository.path }}">
      <link itemprop="downloadUrl" href="{{ repository.path }}/releases">

      <a class="box is-hoverable" target="_blank" rel="noopener noreferrer" href="{{ repository.path }}" aria-label="{{ repository.desc }}">
        <h4 class="box-name" itemprop="name">
          {{ repository.name }}

          <span class="is-right box-meta" data-repo-stars aria-hidden="true"></span>
          <span class="is-right box-meta" data-repo-forks aria-hidden="true"></span>
        </h4>

        <p class="box-description" itemprop="about">{{ repository.desc }}</p>

        <aside itemprop="keywords">
          {% for keyword in repository.keywords %}<strong class="keyword">{{ keyword }}</strong>{% endfor %}
        </aside>
      </a>
    </article>
  {% endfor %}

  <aside class="xs-12 sm-6 lg-4" data-repo-name="{{ repository.name }}">
    <a class="box is-wide is-hoverable" target="_blank" rel="noopener noreferrer" href="https://github.com/Bartozzz">
      See more…
    </a>
  </aside>
</main>

<script src="https://cdnjs.cloudflare.com/ajax/libs/flickity/2.0.10/flickity.pkgd.min.js"></script>
<script src="{{ "/assets/scripts/index.js" | relative_url }}"></script>
