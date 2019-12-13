# frozen_string_literal: true

# Customers module to configure jekyll's bundle per website
module Content
  module_function

  def append(file, data)
    File.open(file, 'a') do |f|
      f.write data
    end
  end

  def prepend(file, data)
    new_content = ''

    File.open(file, 'r') do |f|
      old_content = f.read
      new_content = +data << old_content
    end

    File.open(file, 'w') { |f| f.write new_content }
  end

  def replace(file, old, new)
    content = File.read(file)
    new_content = content.gsub(old, new)

    File.open(file, 'w') { |f| f.puts new_content }
  end
end
