---
published: true
title: Contact form
permalink: /contact/

form:
  id: contact
  lang: es
  request:
    header: Por favor llene todos los campos para brindarle una mejor atención, nuestro personal se comunicará con usted a la brevedad posible. Gracias.
    send-button: <i class="fas fa-paper-plane"></i> Enviar mensaje
    subject: Mensaje de contacto
    fields:
      - label: Nombre
        type: text
        placeholder: Ingrese su nombre completo
        caption:

      - label: Correo electrónico
        type: email
        placeholder: Ingrese su correo electrónico
        caption: Nunca compartiremos su correo con nadie más

      - label: Teléfono
        type: text
        placeholder: Ingrese su número telefónico
        caption: Nunca compartiremos su teléfono con nadie más

      - label: Empresa
        type: text
        placeholder: Ingrese el nombre de su empresa
        caption:

      - label: Mensaje
        type: textarea
        placeholder: Ingrese su mensaje
        caption:
  response:
    header: ¡Gracias!
    subheader: Sus datos se registraron correctamente, nos pondremos en contacto con usted a la brevedad.

i18n:
  en_US:
    form:
      request:
        header: Please fill in all the fields to provide you with a better service, our staff will contact you as soon as possible. Thank you.
  pt_BR:
    form:
      request:
        header: Por favor, preencha todos os campos para fornecer um melhor atendimento, nossa equipe entrará em contato com você o mais breve possível. Obrigado.
---
<div class="container">
  {% include components/forms/formspree.html %}
</div>