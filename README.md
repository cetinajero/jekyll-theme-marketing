# jekyll-theme-marketing

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=cetinajero/jekyll-theme-marketing)](https://dependabot.com)

Right now just a test theme for Jekyll.

## Installation

### Installation on Jekyll sites using GitHub Pages

1. Add the following to your Gemfile

  ```ruby
  gem "jekyll-remote-theme"
  ```
  and run `bundle install` to install the plugin

2. Add the following 3 lines to your site's `_config.yml` to activate the `jekyll-theme-marketing` theme and the `jekyll-remote-theme` plugin

  ```yml
  ...
  remote_theme: cetinajero/jekyll-theme-marketing
  ...
  ...
  plugins:
    - jekyll-remote-theme
  ...
  ```

### Installation on all Jekyll sites

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-marketing"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-marketing
```

And then execute:

    $ bundle install

## Usage

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cetinajero/jekyll-theme-marketing/issues. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-marketing.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Credits

**Edgar Tinajero**

- <https://github.com/cetinajero>
- <https://about.me/cetinajero>
