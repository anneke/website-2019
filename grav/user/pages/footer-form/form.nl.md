---
published: true
visible: false
cache_enabled: false
title: 'Wil je teruggebeld worden?'
form:
    name: callmeplease
    action: /thanks
    description: 'Snel contact opnemen'
    classes: 
    fields:
        -
            name: name
            label: 'Naam'
            placeholder: 'Jouw naam'
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            id: data[name]
            validate:
                required: true
                pattern: ^[a-zA-Z]*$
        -
            name: phone
            label: 'Telefoonnummer'
            placeholder: 'Jouw telefoonnummer'
            autofocus: 'off'
            autocomplete: 'on'
            type: tel
            id: data[phone]
            validate:
                required: true
        -
            name: when
            label: 'Heb je een voorkeur voor het moment dat ik bel?'
            type: checkboxes
            id: data[when]
            default:
                ochtend: false
                middag: false
                avond: false
            options:
                ochtend: '9.00 - 12.00'
                middag: '13.00 - 17.00'
                avond: '19.00 - 21.00'
    buttons:
        -
            type: submit
            value: 'Verstuur'
    process:
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
            message: 'Thank you for your feedback!'
---