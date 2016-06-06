class Category < ActiveRecord::Base

  belongs_to :user
  has_many :transactions
  has_many :monthly_expenditures

end
