FactoryGirl.define do
  sequence :username do |n|
    "#{n} Name"
  end

  factory :user do
    username
    password "password"
  end

  sequence :name do |n|
    "#{n} Category"
  end

  factory :category do
    name "Income"
  end
end
