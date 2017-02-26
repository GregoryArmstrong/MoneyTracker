class SessionsController < ApplicationController

  respond_to :json

  def new
  end

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user && @user.authenticate(params[:session][:password]) && !@user.transactions.empty?
      session[:user_id] = @user.id
      respond_with @user
    elsif @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      respond_with @user
    else
      flash.now[:error] = "Invalid. Try Again."
      render :new, status: 404
    end
  end

  def destroy
    session.clear
    flash[:notice] = "Goodbye!"
    redirect_to login_path
  end

end
