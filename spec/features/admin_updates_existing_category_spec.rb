require 'rails_helper'

RSpec.feature "Admin updates an existing category" do
  scenario "They are redirected to index with updated category" do
    category = Category.create(name: "Income")
    updated_name = "Transportation"
    visit admin_categories_path

    click_on "Edit Category"
    fill_in "category_name", with: updated_name
    click_on "Update Category"

    expect(page).to have_content updated_name
    expect(page).to_not have_content category.name
    expect(current_path).to eq admin_categories_path
  end
end
