class UserSubmissionSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_one :user
  has_one :mashup
end
