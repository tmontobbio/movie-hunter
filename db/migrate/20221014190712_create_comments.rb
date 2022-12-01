class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :content
      t.integer :user_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
