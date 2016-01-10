class User < ActiveRecord::Base

  has_secure_password

  has_many :categories
  has_many :transactions

  enum role: %w(default admin)

end
