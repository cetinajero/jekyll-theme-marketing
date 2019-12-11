# frozen_string_literal: true

require 'date'

# Customers module to configure jekyll's bundle per website
module Dates
  extend self

  def days_in_year(date = Date.today)
    date.yday
  end

  def sundays_in_year(date = Date.today)
    (first_day_of_year(date)..date).to_a.count(&:sunday?)
  end

  def working_days_in_year
    days_in_year - sundays_in_year
  end

  private

  def first_day_of_year(date)
    Date.new(date.year, 1, 1)
  end
end
