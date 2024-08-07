# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'jekyll-theme-marketing'
  spec.version       = '1.0.1'
  spec.authors       = ['Edgar Tinajero']
  spec.email         = ['cetinajero@gmail.com']

  spec.summary       = 'A Jekyll theme :gem: managed with Yarn'
  spec.homepage      = 'https://github.com/cetinajero/jekyll-theme-marketing'
  spec.license       = 'MIT'

  spec.metadata['plugin_type']           = 'theme'
  spec.metadata['rubygems_mfa_required'] = 'true'

  all_files          = `git ls-files -z`.split("\x0")
  spec.files         = all_files.select do |f|
    gemfiles = /^(assets|_layouts|_includes|_sass|lib|LICENSE|README)/i
    f.match(gemfiles)
  end

  spec.required_ruby_version = '~> 2.7'

  spec.add_dependency 'jekyll', '~> 3.6'
end
