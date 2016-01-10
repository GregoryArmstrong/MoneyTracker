require 'rails_helper'

RSpec.feature "registered user can login an account" do 
  scenario "user redirected to user page" do

    user = User.create(username: "Greg", password: "password")

    visit login_path
    fill_in "Username", with: "Greg"
    fill_in "Password", with: "password"
    click_button "Login"

    expect(page).to have_content("Welcome, Greg")

    click_on "Logout"

    expect(page).to have_content("Goodbye")
    expect(page).to_not have_content("Greg")




  end

end
