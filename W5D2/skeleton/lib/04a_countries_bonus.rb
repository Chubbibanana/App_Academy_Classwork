# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      name
    FROM
      countries
    WHERE
      GDP > (
        SELECT
          MAX(GDP)
        FROM
          countries
        WHERE
          continent = 'Europe'
      )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
    SELECT
      continent, name, area
    FROM
      countries
    WHERE
      area = (
        SELECT
          MAX(area)
        FROM
          countries AS biggest_countries
        WHERE 
          biggest_countries.continent = countries.continent
      )
  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
    SELECT 
      name, continent
    FROM
      countries
    WHERE
      population / 3.0 > ALL (
        SELECT
          x.population
        FROM
          countries as x
        WHERE
          x.continent = countries.continent
        AND
          x.name != countries.name
      )
  SQL
end
