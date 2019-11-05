---
title: Blog
a11ytitle: Blog

visible: false
published: false

sitemap:
    changefreq: monthly
    priority: 1.03

content:
    items: @self.children
    order:
        by: date
        dir: desc
    limit: 5
    pagination: false

feed:
    description: Anneke Sinnema's blog
    limit: 10
---
