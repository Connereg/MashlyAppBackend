class AddTitle < ActiveRecord::Migration[6.1]
  def change
    add_column :mashups, :title, :string
    end
end
