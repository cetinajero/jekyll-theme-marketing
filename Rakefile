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
      # 'shoes-woman',
      # 'shoes-man',
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
    Deploy.website
  end

  desc 'Deploy a new gem version to Rubygems'
  task :gem do
    Deploy.gem
  end
end

desc 'Git reset commands'
namespace :reset do
  desc 'Git reset soft'
  task :soft do
    puts "## Current last commit: #{`git log --oneline | head -n 1`}"

    puts '## Rolling back last commit (git reset --soft HEAD~1)'
    system 'git reset --soft HEAD~1'

    puts "## Current last commit: #{`git log --oneline | head -n 1`}"
  end
end

desc 'Continuous integration tests'
namespace :test do
  desc 'Test HTML with html-proofer'
  task :html do
    Test.html
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
    task new_name, Array(Rake.application[old_name].arg_names) => [old_name]
  end
end

alias_task [
  [:b, 'build'],
  [:sd, 'serve:dev'],
  [:sp, 'serve:prod'],
  [:swr, 'serve:without:radios'],
  [:swc, 'serve:without:cctv'],
  [:dw,  'deploy:website'],
  [:dg, 'deploy:gem'],
  [:rs, 'reset:soft'],
  [:th, 'test:html'],
  [:td, 'test:deploy'],

  [:deploy, 'deploy:gem'],
  [:full, 'serve:prod'],
  [:test, 'test:html']
]

desc 'Run local server with _config-dev.yml'
task default: [:sd]
