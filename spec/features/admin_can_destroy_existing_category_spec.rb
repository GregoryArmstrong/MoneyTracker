require 'rails_helper'

RSpec.feature "Admin deletes an existing category" do
  scenario "They are redirect to index after deleting category" do

    admin = User.create(
      username: "admin",
      password: "password",
      role:     1 #identifies user as an admin
      )

    visit login_path

    fill_in "Username", with: "admin"
    fill_in "Password", with: "password"
    click_button "Login"

    assert page.has_content?("Welcome, admin")
    
    category = Category.create(name: "Income")

    visit admin_categories_path

    click_on "Delete Category"

    expect(page).to_not have_content category.name
    expect(current_path).to eq admin_categories_path
  end
end
