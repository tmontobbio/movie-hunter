class FollowSerializer < ActiveModel::Serializer
  attributes :id

  #has_many :incoming_follows, serializer: IncomingFollowsSerializer
end
