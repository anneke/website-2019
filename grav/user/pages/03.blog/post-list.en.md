---
title: Blog
a11ytitle: Blog

visible: false
published: false

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
    description: Anneke Sinnema's blog
    limit: 10
---
