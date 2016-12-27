class CreateLoans < ActiveRecord::Migration
  def change
    create_table :loans do |t|

      t.string :name
      t.float :principal, null: false
      t.float :interest, null: false
      t.float :interest_rate, null: false
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
