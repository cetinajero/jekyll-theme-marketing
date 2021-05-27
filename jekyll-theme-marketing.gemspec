# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = 'jekyll-theme-marketing'
  spec.version       = '1.0.1'
  spec.authors       = ['Edgar Tinajero']
  spec.email         = ['cetinajero@gmail.com']

  spec.summary       = 'A Jekyll theme :gem: managed with Yarn'
  spec.homepage      = 'https://github.com/cetinajero/jekyll-theme-marketing'
  spec.license       = 'MIT'

  spec.metadata['plugin_type'] = 'theme'

  all_files          = `git ls-files -z`.split("\x0")
  spec.files         = all_files.select do |f|
    gemfiles = /^(assets|_layouts|_includes|_sass|lib|LICENSE|README)/i
    f.match(gemfiles)
  end

  spec.required_ruby_version = '2.7.3'

  spec.add_runtime_dependency 'jekyll', '~> 3.6'

  spec.add_development_dependency 'bundler', '~> 2.0'
  spec.add_development_dependency 'rake', '~> 13.0'
end
