class CreateUserSubmissions < ActiveRecord::Migration[6.1]
  def change
    create_table :user_submissions do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :mashup, null: false, foreign_key: true
      t.string :category

      t.timestamps
    end
  end
end
