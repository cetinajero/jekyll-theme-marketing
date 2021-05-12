---
title: High
layout: grid
menu-name: high
menu-father: shoes-woman
image: https://s3-us-west-2.amazonaws.com/grupopv-public/assets/img/catalog/thumbnails/radios/motorola/motorola.png

i18n:
  en_US:
    title: Yeah

filters:
  - title: Brand
    genre: All
    options:
      - { title: 'Converse', filter: '.converse' }
      - { title: 'AOC', filter: '.aoc' }

  - title: Product type
    genre: All
    options:
    - title: High shoes
      filter:
        target: find('.description').text().toLowerCase()
        rule: target.match(/high/)
    - title: LED monitor
      filter:
        target: find('.description').text().toLowerCase()
        rule: target.match(/^led/)
---
