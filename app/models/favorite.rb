class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :movie

  validates_uniqueness_of :movie_id, :scope => [:user_id]
end
