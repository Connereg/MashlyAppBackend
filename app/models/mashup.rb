class Mashup < ApplicationRecord
    has_one :user_submission
    has_one :user, through: :user_submissions

    def initialize(attributes=nil)
        attr_with_defaults = {:upvotes => 0}.merge(attributes)
        super(attr_with_defaults)
    end

    validates :youtubeurl1, presence: true
    validates :youtubeurl2, presence: true
end
