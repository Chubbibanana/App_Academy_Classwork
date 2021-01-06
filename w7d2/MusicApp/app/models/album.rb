# == Schema Information
#
# Table name: albums
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  band_id    :integer          not null
#  year       :integer          not null
#  live       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Album < ApplicationRecord
    validates :name, :band_id, :year, :live, presence: true
    valideates :name, uniqueness: { scope: :band_id} 

    belongs_to :band,
        foreign_key: :band_id,
        class_name: :Band
end
