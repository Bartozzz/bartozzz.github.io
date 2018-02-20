---
layout: default
permalink: /posts/
---

<main class="content" itemprop="mainContentOfPage">
  <ul class="posts" itemscope itemtype="http://schema.org/blogPosts">
    {% for post in site.posts %}
      <li>
        <article class="post" itemscope itemtype="http://schema.org/blogPost">
          <header class="post-meta">
            <time class="post-meta-time" datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">
              {{ post.date | date: "%b %-d, %Y" }}
            </time>

            {% if post.keywords %}
              <span class="post-meta-keywords" itemprop="keywords">
                {% for keyword in post.keywords %}
                  <strong class="keyword">{{ keyword }}</strong>
                {% endfor %}
              </span>
            {% endif %}

            <br>

            <a class="post-meta-title" itemprop="name headline" href="{{ post.url | relative_url }}" lang="{{ post.lang | default: page.lang | default: "en" }}">
              {{ post.title | escape }}
            </a>
          </header>

          <p class="post-content" itemprop="articleBody" lang="{{ post.lang | default: page.lang | default: "en" }}">
            {{ post.content | truncatewords: 50 | strip_html }}
          </p>
        </article>
      </li>
    {% endfor %}
  </ul>
</main>
