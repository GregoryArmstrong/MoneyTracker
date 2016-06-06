class CreateMonthlyExpenditures < ActiveRecord::Migration
  def change
    create_table :monthly_expenditures do |t|
      t.integer :amount
      t.string :month
      t.references :user, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
