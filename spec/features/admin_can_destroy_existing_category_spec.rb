require 'rails_helper'

RSpec.feature "Admin deletes an existing category" do
  scenario "They are redirect to index after deleting category" do
    category = Category.create(name: "Income")

    visit admin_categories_path

    click_on "Delete Category"

    expect(page).to_not have_content category.name
    expect(current_path).to eq admin_categories_path
  end
end
