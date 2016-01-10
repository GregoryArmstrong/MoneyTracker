require 'test_helper'

class AdminCategoriesTest < ActionDispatch::IntegrationTest
  test "logged in admin sees categories index" do
    admin = User.create(
      username: "admin",
      password: "password",
      role:     1
      )

  ApplicationController.any_instance.stubs(:current_user).returns(admin)
  
  visit admin_categories_path
  assert page.has_content?("Categories Index")
  end

  test 'default user does not see admin categories index' do
    user = User.create(username: "default_user",
                        password: "password",
                        role: 0) #default user role

    ApplicationController.any_instance.stubs(:current_user).returns(user)
    visit admin_categories_path
    refute page.has_content?("Categories Index")
    assert page.has_content?("The page you were looking for doesn't exist.") #from 404 error
  end
end
