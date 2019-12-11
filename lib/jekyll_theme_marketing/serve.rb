# frozen_string_literal: true

# Serve jekyll module
module Serve
  extend self

  JEKYLL_OPTIONS = '--config _config-dev.yml --host 0.0.0.0'

  def dev(collections)
    puts "## Running: bundle exec jekyll serve #{JEKYLL_OPTIONS}"
    customize_config_file(collections)
    system "bundle exec jekyll serve #{JEKYLL_OPTIONS}"
  rescue Interrupt => e
    puts e
    puts "\n## Shutting down server"
  end

  def prod
    puts "## Running: bundle exec jekyll serve #{JEKYLL_OPTIONS}"
    config_prod = YAML.load_file('_config.yml')
    config_prod.merge!('baseurl' => nil)
    config_dev = File.new('_config-dev.yml', 'w')
    config_dev.write(config_prod.to_h.to_yaml)
    config_dev.close
    system "bundle exec jekyll serve #{JEKYLL_OPTIONS}"
  rescue Interrupt => e
    puts e
    puts "\n## Shutting down server"
  end

  private

  def customize_config_file(collections_to_publish)
    config_prod = YAML.load_file('_config.yml')
    config_prod.merge!('baseurl' => nil)
    config_prod.each do |global_key, collections|
      next unless global_key == 'defaults'

      customize_collections collections, collections_to_publish
    end
    config_dev = File.new('_config-dev.yml', 'w')
    config_dev.write(config_prod.to_h.to_yaml)
  ensure
    config_dev.close
  end

  def customize_collections(collections, publish)
    collections.each do |properties|
      properties.each do |key, value|
        collection = properties['scope']['type']
        config_key(
          value,
          publish.include?(collection) && key == 'values' ? true : false
        )
      end
    end
  end

  def config_key(key, value)
    key.merge!('published' => value)
  end
end
