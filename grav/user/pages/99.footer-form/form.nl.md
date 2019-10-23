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
            id: name
            arialabel: ctaname
            validate:
                required: true
        -
            name: phone
            label: 'Telefoonnummer'
            placeholder: 'Jouw telefoonnummer'
            autofocus: 'off'
            autocomplete: 'on'
            type: tel
            id: phonenr
            arialabel: ctaphone
            validate:
                required: true
        -
            name: wanneer
            label: 'Wanneer wil je het liefst door mij gebeld worden?'
            type: checkboxes
            id: wanneer
            arialabel: ctawhen
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
                subject: '[Feedback] {{ form.value.name|e }}'
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
<p class="note">Je kunt me natuurlijk ook altijd zelf bellen!<br/>
Je kunt me <span class="implicit">thuis</span> bereiken op nummer <a href="tel:0534321728" class="tel" itemprop="telephone">053-4321728</a> of <span class="implicit">via mobiele telefoon</span> <a href="tel:0644870256" class="tel" itemprop="telephone">06-44870256</a>.</p>