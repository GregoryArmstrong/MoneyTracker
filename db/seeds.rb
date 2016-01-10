# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(username: "Steve", password: "$", role: 1)
User.create(username: "Greg" , password: "$", role: 1)
User.create(username: "Jordan", password: "$", role: 0) #ID 3
User.create(username: "Penney", password: "$", role: 0)
User.create(username: "Beth", password: "$", role: 0)


Category.create(name: "Health") #ID 2
Category.create(name: "Restaurant")
Category.create(name: "Transportation")
Category.create(name: "Entertainment")
Category.create(name: "Miscellaneous")
Category.create(name: "Income")

Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 3)
Transaction.create(amount: 15, description: "chipotle", user_id: 3, category_id: 3)
Transaction.create(amount: 10, description: "illegal petes", user_id: 3, category_id: 3)
Transaction.create(amount: 20, description: "1UP", user_id: 3, category_id: 3)
Transaction.create(amount: 15, description: "pizza", user_id: 3, category_id: 3)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 3)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 3)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 3)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 2)

