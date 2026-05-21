# frozen_string_literal: true

# Specific version (comment) will be used by RVM
#ruby=3.3.11
ruby '3.3.11'

source 'https://rubygems.org'
gemspec

# Install GitHub Pages dependencies needed by bundle exec jekyll serve
gem 'github-pages', group: :jekyll_plugins
gem 'webrick' # Add webrick because it is not part of the default gems starting from Ruby 3.0.0

# Manage application's dependencies
gem 'bundler', '~> 2.0'

# Install rake to automate ruby tasks
gem 'rake'

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
