---
title: Blog
class: blog

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
    description: Feed Titel
    limit: 10
---

Test test