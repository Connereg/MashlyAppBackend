class AddCategoryToMashup < ActiveRecord::Migration[6.1]
  def change
    add_column :mashups, :category, :string
  end
end
