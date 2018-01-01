# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-marketing"
  spec.version       = "0.1.0"
  spec.authors       = ["Edgar Tinajero"]
  spec.email         = ["cetinajero@gmail.com"]

  spec.summary       = %q{Right now just a test theme for Jekyll.}
  spec.homepage      = "https://github.com/cetinajero/jekyll-theme-marketing"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f|
    f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i)
  }

  spec.add_runtime_dependency "jekyll", "~> 3.6"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 12.0"
end
