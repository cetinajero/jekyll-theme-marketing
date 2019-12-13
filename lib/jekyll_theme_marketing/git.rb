# frozen_string_literal: true

# Git module to performe git operations
module Git
  module_function

  def checkout_new_branch(name)
    system 'git checkout master'
    system 'git pull origin master'
    system "git checkout #{name}"    # if the branch doesn't exist, create it
    system "git checkout -b #{name}" # if the branch does exist, switch to it
  end

  def push(remote = '', branch = '', options = '')
    system "git push #{options} #{remote} #{branch}"
  end

  def list_commits(old, new, options = '')
    `git log #{options} #{old}..#{new}`
  end
end
