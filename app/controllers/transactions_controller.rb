class TransactionsController < ApplicationController

  def index
    @transactions = Transaction.all
  end

  def new
    @transaction = Transaction.new
    @category = Category.find(params[:category_id])
  end

  def create
    @transaction = Transaction.create(transaction_params)
    @user = current_user
    @category = Category.find(params[:category_id])
    @category.transactions << @transaction
    @user.transactions << @transaction
    redirect_to category_transactions_path
  end

  private

  def transaction_params
    params.require(:transaction).permit(:amount, :description)
  end

end
