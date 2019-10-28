---
title: Blog
published: true
sitemap:
    changefreq: monthly
class: blog
content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 5
    pagination: true
feed:
    description: 'Feed Title'
    limit: 10
---

Testerdetest