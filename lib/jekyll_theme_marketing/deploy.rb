# frozen_string_literal: true

require 'English'

# Deploy jekyll module
module Deploy
  extend self

  def website
    system 'bundle exec jekyll build'

    Dir.chdir '_site' do
      puts '## Deploying to GitHub Pages'
      push_changes
    end
  end

  def gem
    if %w[major minor patch].include? ARGV[1]
      old_version = `bump current | sed -e 's/^.*:.//g' | tr -d '\n'`
      new_version = `bump show-next #{ARGV[1]} | tr -d '\n'`

      Git.checkout_new_branch "release/v#{new_version}"
      create_release_commit old_version, new_version, ARGV[1]
      Git.push 'origin', "release/v#{new_version}", '--set-upstream'
      Git.push 'origin', "v#{new_version}" # Push tagged version

      publish_to_rubygems new_version
    else puts 'Usage: rake deploy:gem [ major | minor | patch ]'
    end
  end

  private

  def create_release_commit(old, new, type)
    update_changelog old, new
    update_npm old, new
    Git.add
    system "bump #{type} --tag"
  end

  def publish_to_rubygems(new_version)
    system "gem build #{File.basename(Dir.pwd)}.gemspec"
    system "gem push #{File.basename(Dir.pwd)}-#{new_version}.gem"
  end

  def push_changes
    message = "Site updated at #{Time.now.utc}"

    system 'git add -A'
    system "git commit -m \"#{message}\""
    system 'git push'
  end

  def update_changelog(old, new)
    domain = 'www.github.com'
    path = "cetinajero/jekyll-theme-marketing/releases/tag/v#{new}"
    heading = "## [#{new}](https://#{domain}/#{path})"

    pull_requests = get_pull_requests_info old, 'HEAD'

    data = "#{heading}\n\n#{pull_requests}\n"
    Content.prepend 'CHANGELOG.md', data
  end

  def get_pull_requests_info(old, new)
    git_log_options = '--oneline --simplify-by-decoration'
    git_log = Git.list_commits "v#{old}", new, git_log_options

    git_log.gsub(/(?<uid>(^[0-9a-f]+))/) do
      commit = $LAST_MATCH_INFO[:uid]
      path = "cetinajero/jekyll-theme-marketing/commit/#{commit}"
      "- [#{commit}](https://www.github.com/#{path})"
    end
  end

  def update_npm(old, new)
    Content.replace 'package.json', old, new
  end
end
