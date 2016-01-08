require 'rails_helper'

RSpec.feature "Registered creates a transaction" do
  scenario "they are redirected to index page" do
    category = create(:category)
    amount = 10
    description = "Pizza"
    user = User.create(username: "Greg", password: "password")

    visit login_path
    fill_in "Username", with: "Greg"
    fill_in "Password", with: "password"
    click_button "Login"

    visit category_transactions_path(category)

    click_on "Add Transaction"
    fill_in "Amount", with: amount
    fill_in "Description", with: description
    click_on "Create Transaction"

    expect(page).to have_content user.username
    expect(page).to have_content amount
    expect(page).to have_content description
    expect(current_path).to eq category_transactions_path(category)
    end
  end
