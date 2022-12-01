class UserWithFavoritesSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :created_at
  has_many :favorites
end
