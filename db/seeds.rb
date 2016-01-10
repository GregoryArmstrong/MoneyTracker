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


Category.create(name: "Health") #ID 1
Category.create(name: "Restaurant")
Category.create(name: "Transportation")
Category.create(name: "Entertainment")
Category.create(name: "Miscellaneous")
Category.create(name: "Income")

Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 2)
Transaction.create(amount: 15, description: "chipotle", user_id: 3, category_id: 2)
Transaction.create(amount: 10, description: "illegal petes", user_id: 3, category_id: 2)
Transaction.create(amount: 20, description: "1UP", user_id: 3, category_id: 2)
Transaction.create(amount: 15, description: "pizza", user_id: 3, category_id: 2)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 2)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 2)
Transaction.create(amount: 10, description: "pizza", user_id: 3, category_id: 2)
Transaction.create(amount: 100000, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "drugs", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "robo-slave girl 1", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "robo-slave boy 2", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "robo-slave boy 3", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "robo-slave boy 4", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "robo-slave boy 1", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "shake weight", user_id: 3, category_id: 1)
Transaction.create(amount: 124, description: "vaseline", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "vaseline", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "vaseline", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "vaseline", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "tissues", user_id: 3, category_id: 4)
Transaction.create(amount: 124, description: "preparation H", user_id: 3, category_id: 1)
Transaction.create(amount: 1000, description: "child support", user_id: 3, category_id: 5)
Transaction.create(amount: 1000, description: "child support", user_id: 3, category_id: 5)
Transaction.create(amount: 1000, description: "child support", user_id: 3, category_id: 5)
Transaction.create(amount: 1000, description: "child support", user_id: 3, category_id: 5)
Transaction.create(amount: 15, description: "Creed concert tickets", user_id: 3, category_id: 4)
Transaction.create(amount: 5000, description: "Creed merchandise", user_id: 3, category_id: 4)
Transaction.create(amount: 10, description: "Pet octopus food", user_id: 3, category_id: 4)
Transaction.create(amount: 1249, description: "Nipple enlargement surgery", user_id: 3, category_id: 1)
Transaction.create(amount: 1248, description: "Nipple reduction surgery", user_id: 3, category_id: 1)
Transaction.create(amount: 14, description: "Revlon Sassy Auburn hair dye, shade 4 ", user_id: 3, category_id: 1)
Transaction.create(amount: 14, description: "Revlon Sassy Auburn hair dye, shade 4.5 ", user_id: 3, category_id: 1)







