require 'rails_helper'

RSpec.feature "User can delete a transaction" do
  scenario "they are redirect to an index page" do
    category = create(:category)
    user = User.create(username: "Greg", password: "password")
    transaction = Transaction.create(amount: 10, description: "pizza", category_id: category.id, user_id: user.id)

    visit category_transactions_path(category)

    click_on "Delete Transaction"

    expect(page).to_not have_content 10
    expect(page).to_not have_content "pizza"
  end
end
