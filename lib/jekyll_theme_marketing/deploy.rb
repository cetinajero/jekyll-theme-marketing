# frozen_string_literal: true

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

  private

  def push_changes
    message = "Site updated at #{Time.now.utc}"

    system 'git add -A'
    system "git commit -m \"#{message}\""
    system 'git push'
  end
end
