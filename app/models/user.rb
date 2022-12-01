class User < ApplicationRecord
  has_many :comments
  has_many :movies, through: :comments

  has_many :favorites
  has_many :movies, through: :favorites

  # to join "Follow.create(follower: User.first, followed: User.second)"
  has_many :follows, foreign_key: :follower_id
  has_many :followings, foreign_key: :followed_id, class_name: "Follow"

  # to show
  has_many :users_followed_by, through: :followings, source: :follower # users that are following this user
  has_many :users_followed, through: :follows, source: :followed # users this user followed

  has_secure_password
  validates_presence_of :username
  validates :password, length: { in: 6..20 }

  before_validation :set_defaults

  private

  def set_defaults
    self.avatar = "https://thumbs.dreamstime.com/b/default-profile-picture-avatar-photo-placeholder-vector-illustration-default-profile-picture-avatar-photo-placeholder-vector-189495158.jpg" if self.avatar.blank?
  end
end
