require 'rails_helper'

RSpec.feature "guest can create an account" do 
  scenario "user redirected to user page" do
    visit new_user_path

    fill_in "Username", with: "Greg"
    fill_in "Password", with: "password"
    click_button "Create Account"

    expect(page).to have_content("Welcome, Greg")
  end

end