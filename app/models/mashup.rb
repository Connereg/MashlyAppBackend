class Mashup < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  def initialize(attributes=nil)
    attr_with_defaults = {:upvotes => 0}.merge(attributes)
    super(attr_with_defaults)
  end

validates :youtubeurl1, presence: true
validates :youtubeurl2, presence: true
validates :user_id, presence: true
end
