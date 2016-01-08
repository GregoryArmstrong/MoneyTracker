require 'rails_helper'

RSpec.feature "Registered user updates a transaction" do
  scenario "they are redirect to index page" do
    category = create(:category)
    user = User.create(username: "Greg", password: "password")
    transaction = Transaction.create(amount: 10, description: "pizza", category_id: category.id, user_id: user.id)
    updated_amount = 15
    updated_description = "home depot"

    visit login_path
    fill_in "Username", with: user.username
    fill_in "Password", with: user.password
    click_button "Login"

    visit category_transactions_path(category)

    click_on "Edit Transaction"
    expect(page).to have_content "Update Transaction"
    fill_in "Amount", with: updated_amount
    fill_in "Description", with: updated_description
    click_on "Update Transaction"

    expect(page).to have_content user.username
    expect(page).to have_content updated_amount
    expect(page).to have_content updated_description
    expect(current_path).to eq category_transactions_path(category)

    expect(page).to_not have_content 10
    expect(page).to_not have_content "pizza"
  end
end
