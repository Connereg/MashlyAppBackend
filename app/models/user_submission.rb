class UserSubmission < ApplicationRecord
  belongs_to :user
  belongs_to :mashup
end
