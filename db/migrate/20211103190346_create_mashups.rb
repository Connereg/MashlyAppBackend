class CreateMashups < ActiveRecord::Migration[6.1]
  def change
    create_table :mashups do |t|
      t.string :youtubeurl1
      t.string :youtubeurl2
      t.integer :upvotes

      t.timestamps
    end
  end
end
