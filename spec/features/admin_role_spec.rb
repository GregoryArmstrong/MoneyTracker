require 'rails_helper'

RSpec.feature "Admin can view new category admin page" do
  scenario "They see the page for categories index for admin" do
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
    
    category_name = "Income"

    visit admin_categories_path

    expect(page).to have_content "Categories Index"
  end 

  scenario "User can not view page for categories index for admin" do
    admin = User.create(
      username: "default_user",
      password: "password",
      role:     0 #identifies user as an admin
      )

    visit login_path

    fill_in "Username", with: "default_user"
    fill_in "Password", with: "password"
    click_button "Login"

    assert page.has_content?("Welcome, default_user")
    
    visit admin_categories_path

    expect(page).to_not have_content "Categories Index"
    expect(page).to have_content "The page you were looking for doesn't exist."
  end
end
