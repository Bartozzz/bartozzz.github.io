---
layout: default
title: Devblogs
permalink: /posts/
---

<main id="content" class="content" itemprop="mainContentOfPage">
  <ul class="content-list" itemscope itemtype="http://schema.org/blogPosts">
    {% for post in site.posts %}
      {% assign path = post.url | relative_url %}
      {% assign lang = post.lang | default: page.lang | default: "en" %}

      <li>
        <article class="post" itemscope itemtype="http://schema.org/blogPost">
          <header class="post-meta">
            <time class="post-meta-time is-caps" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
              {{ post.date | date: "%b %-d, %Y" }}
            </time>

            {% if post.keywords %}
              <span class="post-meta-keywords" itemprop="keywords">
                {% for keyword in post.keywords %}
                  <strong class="keyword">{{ keyword }}</strong>
                {% endfor %}
              </span>
            {% endif %}

            <h2>
              <a itemprop="name headline" href="{{ path }}" lang="{{ lang }}">{{ post.title | escape }}</a>
            </h2>
          </header>

          <p class="post-content" itemprop="articleBody" lang="{{ lang }}">
            {{ post.content | truncatewords: 50 | strip_html }}&nbsp;

            {%- if lang == "en" -%}
              <a href="{{ path }}" lang="{{ lang }}">Read more.</a>
            {%- elsif lang == "fr" -%}
              <a href="{{ path }}" lang="{{ lang }}">Lire la suite.</a>
            {%- else -%}
              <a href="{{ path }}" lang="{{ lang }}">Czytaj więcej.</a>
            {%- endif -%}
          </p>
        </article>
      </li>
    {% endfor %}
  </ul>
</main>
