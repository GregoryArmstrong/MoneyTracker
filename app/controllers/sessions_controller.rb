class SessionsController < ApplicationController

  respond_to :json

  def new
  end

  def create
    @user = User.find_by(username: params[:session][:username])
    if @user && @user.authenticate(params[:session][:password]) && !@user.transactions.empty?
      session[:user_id] = @user.id
      redirect_to transactions_path
    elsif @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      # redirect_to @user
      respond_with @user
    else
      flash.now[:error] = "Invalid. Try Again."
      render :new
    end
  end

  def destroy
    session.clear
    flash[:notice] = "Goodbye!"
    redirect_to login_path
  end

end
