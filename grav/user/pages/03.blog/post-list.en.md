---
title: Blog
a11ytitle: Blog

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
    description: Anneke Sinnema's blog
    limit: 10
---
