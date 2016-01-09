require 'rails_helper'

RSpec.feature "Admin creates a new category" do
  scenario "They see the page for categories index" do
    category_name = "Income"

    visit admin_categories_path

    click_on "New Category"
    fill_in "category_name", with: category_name
    click_on "Create Category"

    expect(page).to have_content category_name
      expect(page).to have_content "Categories Index"
  end
end
