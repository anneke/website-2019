---
published: true
visible: false
cache_enabled: false
title: 'Wil je teruggebeld worden?'
form:
    name: callmeplease
    action: /thanks
    description: 'Snel contact opnemen'
    classes: null
    fields:
        -
            name: name
            label: Naam
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            id: 'data[name]'
            validate:
                required: true
                pattern: '^[a-zA-Z]*$'
        -
            name: phone
            label: Telefoonnummer
            autofocus: 'off'
            autocomplete: 'on'
            type: tel
            id: 'data[phone]'
            validate:
                required: true
        -
            name: about
            label: 'Waar gaat het over?'
            autofocus: 'off'
            autocomplete: 'off'
            type: textarea
            rows: 3
            id: 'data[about]'
            validate:
                required: true
        -
            name: when
            label: 'Heb je een voorkeur voor het moment dat ik bel?'
            type: checkboxes
            id: 'data[when]'
            default:
                ochtend: false
                middag: false
                avond: false
            options:
                ochtend: ' 9.00 — 12.00'
                middag: '13.00 — 17.00'
                avond: '19.00 — 21.00'
        -
            label: Captcha
            type: captcha
            recaptcha_not_validated: 'Captcha niet geldig!'
    buttons:
        -
            type: submit
            value: Verstuur
    process:
        -
            captcha: true
        -
            email:
                from: mail@annekesinnema.nl
                to: mail@annekesinnema.nl
                subject: '[Bel me terug] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: callme-
                dateformat: Ymd-His-u
                extension: yaml
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: Dankjewel!
---

