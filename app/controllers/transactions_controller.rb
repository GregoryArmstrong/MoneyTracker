class TransactionsController < ApplicationController
  before_action :set_category, except: [:show, :destroy, :index, :new]
  before_action :set_transaction, only: [:edit, :update, :destroy]

  def index
    # @category = Category.find(params[:category_id])
    if params[:category_id]
      @category = Category.find(params[:category_id])
      @transactions = Transaction.where(category_id: params[:category_id])
    else 
      @transactions = Transaction.where(user_id: current_user.id)
      render :user_transactions
    end
  end

  def new
    @transaction = Transaction.new
    if params[:category_id]
      @category = Category.find(params[:category_id])
    else 
      @category = @selected_category
    end 
  end

  def create
    @user = current_user
    # @category = Category.find(params[:category_id])
    if @transaction = Transaction.create(transaction_params)
      @category.transactions << @transaction
      @user.transactions << @transaction
      flash[:notice] = "Transaction Added"
      redirect_to category_transactions_path
    else 
      flash[:error] = "amount and description can't be blank"
      render :new
    end
  end

  def edit
    # @transaction = Transaction.find(params[:id])
    # @category = @transaction.category
  end

  def update
    # @transaction = Transaction.find(params[:id])
    # @category = @transaction.category
    if @transaction.update(transaction_params)
      flash[:notice] = "Transaction Updated"
      redirect_to category_transactions_path
    else 
      flash[:error] = "amount and description can't be blank"
      render :edit
    end
  end

  def destroy
    # @transaction = Transaction.find(params[:id])
    @transaction.destroy
    flash[:notice] = "Transaction Deleted"
    redirect_to category_transactions_path
  end

  private

  def transaction_params
    params.require(:transaction).permit(:amount, :description)
  end

  def set_category
    @category = Category.find(params[:category_id])
  end 

  def set_transaction 
    @transaction = Transaction.find(params[:id])
  end 

end
