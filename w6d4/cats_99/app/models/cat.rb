require "action_view"
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper 

    # validations
    COLORS = %w(orange black white brown gray).freeze
    SEXES = %w(M F)

    validates :color, inclusion: COLORS
    validates :sex, inclusion: SEXES
    validates :birth_date, :color, :name, :sex, presence: true



    def age
        time_ago_in_words(birth_date)
    end
end
