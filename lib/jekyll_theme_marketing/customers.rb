# frozen_string_literal: true

require 'nokogiri'
require 'open-uri'

# Customers module to configure jekyll's bundle per website
module Customers
  extend self

  JEKYLL_CONFIG = '_config.yml'

  def activate
    delete_default_config
    activate_customers_config(customer_config_path)
  end

  def show_last_deploys_dates
    last_deploys_dates = []
    customers_domains.each do |customer|
      puts "Testing #{customer}"
      last_deploys_dates << "#{deploy_date(customer)}: #{customer}"
    end
    puts last_deploys_dates.sort.reverse
  end

  def customers_domains
    domains = []
    customers_list.each do |customer|
      domain = customer
               .gsub('./_data/customers/', '')
               .gsub('.yml', '')
      domains << domain
    end
    domains
  end

  def customers_list
    Dir.glob('./_data/customers/*.yml').to_a.sort
  end

  def deploy_date(customer)
    page = Nokogiri::HTML(open("https://www.#{customer}"))
    last_deploy = page.css('img[data-last-deploy]')[0]
    last_deploy.nil? ? '' : last_deploy['data-last-deploy'].gsub(/ -0.00/, '')
  end

  private

  def customer_config_path
    customer_index = Dates.working_days_in_year % customers_list.count
    customers_list[customer_index - 1]
  end

  def delete_default_config
    File.delete(JEKYLL_CONFIG) if File.exist?(JEKYLL_CONFIG)
  end

  def activate_customers_config(path)
    File.rename(path, JEKYLL_CONFIG)
    puts "#{Time.now} | Actived customers config at #{path}"
  end
end
