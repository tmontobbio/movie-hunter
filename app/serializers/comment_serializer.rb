class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :created_at, :user
  has_one :user

  def created_at
    # full date/time "%b %d %y - %l:%M%P"
    object.created_at.strftime("%b %d %y")
  end
end
