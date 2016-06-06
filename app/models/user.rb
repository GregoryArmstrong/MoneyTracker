class User < ActiveRecord::Base

  has_secure_password

  has_many :categories
  has_many :transactions
  has_many :monthly_expenditures

  enum role: %w(default admin)

end
