class IncomingFollowsSerializer < ActiveModel::Serializer
  attributes :id, :requestor_id
  has_one :requestor
end
