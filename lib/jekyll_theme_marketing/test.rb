# frozen_string_literal: true

# Test jekyll module
module Test
  extend self

  IGNORED_URLS = [
    'https://www.facebook.com/grupopvmx',
    'https://mx.linkedin.com/company/grupo-pv-mexico',
    'https://twitter.com/grupopvmx'
  ].freeze

  TASKS_OPTIONS = {
    internal: { disable_external: true },
    external: { external_only: true }
  }.freeze

  def html
    puts '## Skipping rel="canonical" from jekyll-seo-tag gem'
    htmlproofer_ignore_canonical(%r{/>}, "data-proofer-ignore \/>")

    puts '## Running: bundle exec jekyll build --trace'
    system 'bundle exec jekyll build --trace'

    puts '## Revert jekyll-seo-tag gem to pristine condition'
    system 'gem pristine jekyll-seo-tag'

    HTMLProofer.check_directory('./_site', options).run
  end

  private

  def edit_contents_file(path, search_line, old_str, new_str)
    temp_file = Tempfile.new('foo')
    File.open(path, 'r') do |file|
      file.each_line do |l|
        temp_file.puts l.include?(search_line) ? l.gsub(old_str, new_str) : l
      end
    end
    FileUtils.mv(temp_file.path, path)
  ensure
    temp_file.close
    temp_file.unlink
  end

  def htmlproofer_ignore_canonical(old_string, new_string)
    gem_path = `bundle info jekyll-seo-tag --path`.strip
    template_path = "#{gem_path}/lib/template.html"
    template_line = 'rel="canonical"'
    edit_contents_file(template_path, template_line, old_string, new_string)
  end

  def options
    default_options = {
      assume_extension: true,
      error_sort: :desc,
      url_ignore: IGNORED_URLS
    }

    TASKS_OPTIONS.each do |key, value|
      default_options.merge!(value) if key.to_s == ARGV[1]
    end

    default_options
  end
end
