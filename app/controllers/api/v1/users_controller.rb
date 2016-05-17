class Api::V1::UsersController < Api::V1::BaseController

  def create
    respond_with :api, :v1, User.create(user_params)
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end
