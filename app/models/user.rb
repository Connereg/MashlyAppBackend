class User < ApplicationRecord
has_secure_password

has_many :user_submissions
has_many :mashups, through: :user_submissions

    def initialize(attributes=nil)
        attr_with_defaults = {:profile_picture => "https://png.pngtree.com/png-clipart/20210129/ourlarge/pngtree-default-male-avatar-png-image_2811083.jpg"}.merge(attributes)
        super(attr_with_defaults)
    end

validates :username, presence: true
validates :password, presence: true

end
