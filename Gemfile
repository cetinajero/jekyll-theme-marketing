# frozen_string_literal: true

source "https://rubygems.org"
gemspec

# Install GitHub Pages dependencies needed by bundle exec jekyll serve
gem 'github-pages', group: :jekyll_plugins

# Install `Timezone Data` and `Windows Directory Monitor` gems needed by bundle exec jekyll serve on Windows
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]
gem 'wdm' if Gem.win_platform?

# Install bump needed to publish new releases
gem 'bump'

# Install html-proofer to test and validate the HTML output
gem "html-proofer"
