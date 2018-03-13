## Unreleased

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
