# frozen_string_literal: true

ruby '2.5.3'

source 'https://rubygems.org'
gemspec

# Install GitHub Pages dependencies needed by bundle exec jekyll serve
gem 'github-pages', group: :jekyll_plugins

# Install test-unit to test and validate the Ruby source code
gem 'test-unit'

# Install rubocop to test and validate the Ruby source code
gem 'rubocop'

# Install html-proofer to test and validate the HTML output
gem 'html-proofer'

# Install bump needed to publish new releases
gem 'bump'

# Install gems needed by bundle exec jekyll serve on Windows
if Gem.win_platform?
  gem 'tzinfo-data'
  gem 'wdm'
end

# TODO: To be removed when octokit has released a version addressing
# https://github.com/octokit/octokit.rb/issues/1170
gem 'faraday', '<=1.1.0'
