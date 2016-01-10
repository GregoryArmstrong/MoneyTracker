require 'rails_helper'

RSpec.feature "User can delete a transaction" do
  scenario "they are redirect to an index page" do
    category = create(:category)
    user = User.create(username: "Greg", password: "password")
    transaction = Transaction.create(amount: 10, description: "pizza", category_id: category.id, user_id: user.id)

    visit login_path
    fill_in "Username", with: "Greg"
    fill_in "Password", with: "password"
    click_button "Login"

    visit category_transactions_path(category)

    click_on "Delete Transaction"

    expect(page).to_not have_content 10
    expect(page).to_not have_content "pizza"
  end
end
