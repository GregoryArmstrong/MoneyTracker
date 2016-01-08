class TransactionsController < ApplicationController

  def index
    @category = Category.find(params[:category_id])
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

  def edit
    @transaction = Transaction.find(params[:id])
    @category = @transaction.category
  end

  def update
    @transaction = Transaction.find(params[:id])
    @category = @transaction.category
    @transaction.update(transaction_params)


    redirect_to category_transactions_path
  end

  private

  def transaction_params
    params.require(:transaction).permit(:amount, :description)
  end

end
