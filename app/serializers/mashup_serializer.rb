class MashupSerializer < ActiveModel::Serializer
  attributes :id, :youtubeurl1, :youtubeurl2, :upvotes, :title, :user_id, :category
  has_one :user
end
