## [0.5.0](https://github.com/cetinajero/jekyll-theme-marketing/releases/tag/v0.5.0)

### Enhancements
* Installed dependency packages [#2f68852](https://github.com/cetinajero/jekyll-theme-marketing/commit/2f688525224b06e075954667490e27e5a914c9bb)
  * "bootstrap": "3.2.0",
  * "flag-icon-css": ">=3.0.0",
  * "font-awesome": ">=4.1.0",
  * "jquery": "1.11.2",
  * "js-md5": ">=0.7.3",
  * "jspdf": ">=1.3.5",
  * "vue": ">=2.5.16"
* Installed dependencies thru `yarn` package manager. [#a8b33b7](https://github.com/cetinajero/jekyll-theme-marketing/commit/a8b33b753b750e7551a444c970b6ef2ecb4c9bc7), [#86e3f5c](https://github.com/cetinajero/jekyll-theme-marketing/commit/86e3f5c0ecf0cea60fd7387695d901f5e11fed54)
* Added `lang-switcher` component. [#3d18d5b](https://github.com/cetinajero/jekyll-theme-marketing/commit/3d18d5bf99deee3a3a56a2c40b85c6ce86390beb)
* Added `max-width` to breadcrumb component. [#021829a](https://github.com/cetinajero/jekyll-theme-marketing/commit/021829a231ff43883b02d92c3cc81060c1ef5702)
* Added i18n page content thru `detailed_desc`. [#aebcc9e](https://github.com/cetinajero/jekyll-theme-marketing/commit/aebcc9e41526e733e04b0109c916824047349158)
* Created `components` SASS section. [#de17ee0](https://github.com/cetinajero/jekyll-theme-marketing/commit/de17ee0cb6ce75a650d4edb944d9aa6f9b3eec07)
* Added `data-last-deploy` attribute to `body/header/logo` include. [#7064910](https://github.com/cetinajero/jekyll-theme-marketing/commit/7064910bb387586a73df89d2abd418c97a3ba41e)
* Implement Firestore database on `exchange-rates` collection. [#bce885c](https://github.com/cetinajero/jekyll-theme-marketing/commit/bce885c2a662199bac1ee6501c46ecaf36bbae26)
* Translate `3d-space` product-card. [#ccd64d0](https://github.com/cetinajero/jekyll-theme-marketing/commit/ccd64d0434be296cfdc58cfecdc8016ab82fbf03)
* Make `3d-space` product card responsive. [#5f70ca2](https://github.com/cetinajero/jekyll-theme-marketing/commit/5f70ca217aecadcab6eaf7d166005c9528d0e6a9)

### Bug fixes
* Fixed issue on special offers's `Download` button. [#d226b2d](https://github.com/cetinajero/jekyll-theme-marketing/commit/d226b2da2b195dfebf98c049e7b3f07306b6154a)
* Fixed issue using `collection.label` instead of `page.collection`. [#9521b09](https://github.com/cetinajero/jekyll-theme-marketing/commit/9521b093d69d3528575f60ab30575cafd571386c)

## [0.4.0](https://github.com/cetinajero/jekyll-theme-marketing/releases/tag/v0.4.0)

### Enhancements
* Add `jsPDF` to create PDF on the fly. [#969a9c5](https://github.com/cetinajero/jekyll-theme-marketing/commit/969a9c5764c3ca3bc106ad1a512c98f8310d5a12)
* Implement `breadcrumbs` on `page` layout. [#6ca0530](https://github.com/cetinajero/jekyll-theme-marketing/commit/6ca053000c4e02429f4a8a0bb9e4914369dd5bd7) [#73771fe](https://github.com/cetinajero/jekyll-theme-marketing/commit/73771fec9c21052153b878dea33af976fcc06bdb)
* Create 3D Space `product-card`. [#a9b7efc](https://github.com/cetinajero/jekyll-theme-marketing/commit/a9b7efcf827f69641f9a79fe5ca5b4672eb0796c)
* Active targered `nav-tab` based on hashed urls on `product` layout. [#a080366](https://github.com/cetinajero/jekyll-theme-marketing/commit/a0803660b28796f4a93eb1ffdc3e43c8e476aedd)

## [0.3.0](https://github.com/cetinajero/jekyll-theme-marketing/releases/tag/v0.3.0)

### Enhancements
* Added layout [product](https://github.com/cetinajero/jekyll-theme-marketing/blob/1e72b8f0691ee4231ab72845813d8a251633553b/_layouts/product.html) to display basic information about products on headers. [#7aa2dc2](https://github.com/cetinajero/jekyll-theme-marketing/commit/7aa2dc27ffd09ab9ba3355371f1a3298176d86a9)
* Updated layout [page](https://github.com/cetinajero/jekyll-theme-marketing/blob/50cf0a5a9aa6a9d6e83b4855bd050e72c9e17dd6/_layouts/page.html) to manage `i18n` and product `collections`. [#50cf0a5](https://github.com/cetinajero/jekyll-theme-marketing/commit/50cf0a5a9aa6a9d6e83b4855bd050e72c9e17dd6)
* Added layout [grid](https://github.com/cetinajero/jekyll-theme-marketing/blob/2ecf7929406960910b71fe8bbdbfbb13ab44feb9/_layouts/grid.html). [#2ecf792](https://github.com/cetinajero/jekyll-theme-marketing/commit/2ecf7929406960910b71fe8bbdbfbb13ab44feb9)
* Implemented [CHANGELOG.md](CHANGELOG.md)

## [0.2.0](https://github.com/cetinajero/jekyll-theme-marketing/releases/tag/v0.2.0)

### Enhancements

* Implemented `relative_url` links. [#a7a50ef](https://github.com/cetinajero/jekyll-theme-marketing/commit/a7a50ef03bc44ffdd0f19d44e8745f106eab4218)
* Implemented `OpenSearch` protocol. [#1e06157](https://github.com/cetinajero/jekyll-theme-marketing/commit/1e061579c41c3fd7f70395d22f698ae30222bc64)
* Added `favicon.ico` [#a579565](https://github.com/cetinajero/jekyll-theme-marketing/commit/a57956595486ba0304b221d413ff7d2f3671b7c9)
* Added `meta` tags to head. [#f81d511](https://github.com/cetinajero/jekyll-theme-marketing/commit/f81d511bdb2eb0c10a0214bbf9efa535e243a551)
* Added `head` and `body` to `default` layout, also added structure to `home` layout. [#ba9f2fc](https://github.com/cetinajero/jekyll-theme-marketing/commit/ba9f2fc150b4db0c06a1000a0e064e521ff462c9)
* Added `rake` tasks for easier development.
* Added `plaintext` layout. [#20a4af9](https://github.com/cetinajero/jekyll-theme-marketing/commit/20a4af95941267e185828d367b75635eca90fac6)
  * Note: `plaintext` layout do not depend on the `default` layout.
* Added `github-pages` gem. [#35b3b49](https://github.com/cetinajero/jekyll-theme-marketing/commit/35b3b49dee492248fb3014e8333eb809e31dcfbb)

### Bug Fixes

* Fix `unsupported theme` warning from GitHub pages builds. [#3b6dc0a](https://github.com/cetinajero/jekyll-theme-marketing/commit/3b6dc0a057b5331bd71370b6c0d9131e53c823fe)

## [0.1.0](https://github.com/cetinajero/jekyll-theme-marketing/releases/tag/v0.1.0)

### Enhancements

* Added `default`, `home`, `page` and `post` layouts. [_layouts@v0.1.0](https://github.com/cetinajero/jekyll-theme-marketing/tree/v0.1.0/_layouts)
  * Note: `home`, `page` and `post` layouts depend on the `default` layout.
