---
published: true
visible: false
cache_enabled: false
title: 'Stuur me een bericht'
form:
    name: contact
    action: /thanks
    description: 'Contact'
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
                pattern: ^[a-zA-Z]*$
        -
            name: business
            label: 'Bedrijf'
            placeholder: 'Het bedrijf waar je namens mailt'
            autofocus: 'off'
            autocomplete: 'on'
            type: text
            id: name
            arialabel: ctabusiness
            validate:
                required: false
        -
            name: email
            label: 'E-mailadres'
            placeholder: 'Jouw e-mailadres'
            autofocus: 'off'
            autocomplete: 'on'
            type: email
            id: name
            arialabel: ctamail
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
                required: false
        -
            name: whatabout
            label: 'Waar gaat het over?'
            placeholder: 'Wat kun je me alvast vertellen?'
            type: textarea
            id: whatabout
            arialabel: whatabout
            required: true
    buttons:
        -
            type: submit
            value: 'Verstuur'
    process:
        -
            email:
                from: mail@annekesinnema.nl
                to: mail@annekesinnema.nl
                subject: '[Contact] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: contact-
                dateformat: Ymd-His-u
                extension: yaml
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your feedback!'
---
<p class="note">Je kunt me natuurlijk ook altijd zelf bellen!<br/>
Je kunt me <span class="implicit">thuis</span> bereiken op nummer <a href="tel:0534321728" class="tel" itemprop="telephone">053-4321728</a> of <span class="implicit">via mobiele telefoon</span> <a href="tel:0644870256" class="tel" itemprop="telephone">06-44870256</a>.</p>