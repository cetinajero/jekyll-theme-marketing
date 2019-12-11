# frozen_string_literal: true

require 'rubygems'
require 'yaml'
require 'html-proofer'
require 'rake/testtask'
require_relative 'lib/jekyll_theme_marketing'

ARGV.each { |a| task(a.to_sym) {} }

desc 'Build website'
task :build do
  puts '## Running: bundle exec jekyll build --verbose --trace'
  system 'bundle exec jekyll build --verbose --trace'
  cd '_site' do
    puts '## Showing changes in _site'
    system 'git status'
    puts '## Build Complete!'
  end
end

desc 'Run local server'
namespace :serve do
  desc 'Run local server with _config-dev.yml'
  task :dev do
    collections = [
      # 'radios',
      # 'cctv',
      # 'emergency-lights',
      # 'auxiliary-equipment',
      # 'satelital',
      # 'gps',
      # 'spares',
      # 'networks',
      'pages'
    ]
    Serve.dev(collections)
  end

  desc 'Run local server with _config.yml'
  task(:prod) { Serve.prod }

  # Run local server without a collection
  namespace :without do
    # Run local server without radios collection
    task :radios do
      collections = [
        # 'radios',
        'cctv', 'emergency-lights', 'auxiliary-equipment',
        'satelital', 'gps', 'spares', 'networks'
      ]
      Serve.dev collections
    end

    # Run local server without cctv collection
    task :cctv do
      collections = [
        # 'cctv',
        'radios', 'emergency-lights', 'auxiliary-equipment',
        'satelital', 'gps', 'spares', 'networks'
      ]
      Serve.dev collections
    end
  end
end

desc 'Deploy tasks'
namespace :deploy do
  desc 'Deploy site to Github Pages'
  task :website do
    puts "## Deploying to GitHub Pages"

    puts "## Generating site"
    system "bundle exec jekyll build"

    cd "_site" do
      system "git add -A"

      message = "Site updated at #{Time.now.utc}"
      puts "## Commiting: #{message}"
      system "git commit -m \"#{message}\""

      puts "## Pushing generated site"
      system "git push"

      puts "## Deploy Complete!"
    end
  end

  desc 'Deploy a new gem version to Rubygems'
  task :"new-version" do
    ARGV.each { |a| task(a.to_sym) {} }

    puts "## Running: bump #{ARGV[1]} --tag"
    system "bump #{ARGV[1]} --tag"
    new_version = `bump current | sed -e 's/^.*:.//g' | tr -d '\n'`

    puts '## Running: git push origin master'
    system 'git push origin master'

    puts "## Running: git push origin v#{new_version}" # Push tagged version
    system "git push origin v#{new_version}"

    puts "## Running: gem build #{File.basename(Dir.pwd)}.gemspec"
    system "gem build #{File.basename(Dir.pwd)}.gemspec"

    puts "## Running: gem push #{File.basename(Dir.pwd)}-#{new_version}.gem"
    system "gem push #{File.basename(Dir.pwd)}-#{new_version}.gem"
  end

end

desc 'Git reset commands'
namespace :reset do
  desc 'Git reset soft'
  task :soft do
    puts '## Current last commit: ' + `git log --oneline | head -n 1`

    puts '## Rolling back last commit (git reset --soft HEAD~1)'
    system 'git reset --soft HEAD~1'

    puts '## Current last commit: ' + `git log --oneline | head -n 1`
  end
end

def edit_contents_file(path, text_to_search, old_string, new_string)
  temp_file = Tempfile.new('foo')
  begin
    File.open(path, 'r') do |file|
      file.each_line do |line|
        temp_file.puts line.include?(text_to_search) ? line.gsub(old_string, new_string) : line
      end
    end
    temp_file.close
    FileUtils.mv(temp_file.path, path)
  ensure
    temp_file.close
    temp_file.unlink
  end
end

def htmlproofer_ignore_canonical(old_string, new_string)
  gem_path = `bundle show jekyll-seo-tag`.strip
  template_path = "#{gem_path}/lib/template.html"
  template_line = "rel=\"canonical\""
  edit_contents_file(template_path, template_line, old_string, new_string)
end

desc 'Continuous integration tests'
namespace :test do
  desc 'Test HTML with html-proofer'
  task :html do
    puts "## Skipping rel=\"canonical\" from test"
    htmlproofer_ignore_canonical /\/>/, "data-proofer-ignore \/>"

    puts "## Running: bundle exec jekyll build --trace"
    sh "bundle exec jekyll build --trace"

    puts "## Revert rel=\"canonical\" node to stock config"
    htmlproofer_ignore_canonical /data-proofer-ignore \/>/, "\/>"

    def get_options()
      default_options = {
        :assume_extension => true,
        :error_sort => :desc,
        :url_ignore => ["https://mx.linkedin.com/company/grupo-pv-mexico"],
       }

      tasks_options = {
        :internal => { :disable_external => true },
        :external => { :external_only => true },
      }

      ARGV.each { |a| task a.to_sym do ; end }
      tasks_options.each do |key, value|
        if key.to_s == ARGV[1]
          default_options.merge!(value)
        end
      end

      return default_options
    end

    HTMLProofer.check_directory("./_site", get_options).run
  end

  desc 'Select customer to test'
  task :customer do
    Customers.activate
  end

  Rake::TestTask.new do |t|
    t.libs << 'tests'
    t.test_files = FileList['tests/test*.rb']
    t.verbose = true
  end

  desc 'Show last deploy date on customers sites'
  task :deploy do
    Customers.show_last_deploys_dates
  end
end

desc 'Verifies the connectivity and validity of the objects in the database'
namespace :fsck do
  desc 'Search for dangling commits in database'
  task :dangling do
    puts "## Running: git log --graph --oneline --decorate \
      $(git fsck --no-reflog | awk '/dangling commit/ {print $NF}')"
    sh "git log --graph --oneline --decorate \
      $(git fsck --no-reflog | awk '/dangling commit/ {print $NF}')"
  end
end

def alias_task(tasks)
  tasks.each do |new_name, old_name|
    task new_name, [*Rake.application[old_name].arg_names] => [old_name]
  end
end

alias_task [
  [:b, 'build'],
  [:sd, 'serve:dev'],
  [:sp, 'serve:prod'],
  [:swr, 'serve:without:radios'],
  [:swc, 'serve:without:cctv'],
  [:dw,  'deploy:website'],
  [:dnv, 'deploy:new-version'],
  [:rs, 'reset:soft'],
  [:th, 'test:html'],
  [:td, 'test:deploy'],

  [:deploy, 'deploy:new-version'],
  [:full, 'serve:prod'],
  [:test, 'test:html']
]

desc 'Run local server with _config-dev.yml'
task default: [:sd]
