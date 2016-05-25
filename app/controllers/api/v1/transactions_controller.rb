class Api::V1::TransactionsController < Api::V1::BaseController

  def index
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).order(date: :desc)
  end

  def create
    @transaction = Transaction.create(transaction_params)
    current_user.transactions << @transaction
    respond_with :api, :v1, @transaction
  end

  def destroy
    respond_with Transaction.destroy(params[:id])
  end

  def update
    transaction = Transaction.find(params["id"])
    transaction.update_attributes(transaction_params)
    respond_with transaction, json: transaction
  end

  def total
    respond_with Transaction.where(user_id: current_user.id).sum(:amount)
  end

  def health
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 1).sum(:amount) * -1
  end

  def food
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 2).sum(:amount) * -1
  end

  def transportation
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 3).sum(:amount) * -1
  end

  def entertainment
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 4).sum(:amount) * -1
  end

  def miscellaneous
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 5).sum(:amount) * -1
  end

  def income
    respond_with :api, :v1, Transaction.where(user_id: current_user.id).where(category_id: 6).sum(:amount)
  end

  def daily_total
    respond_with Transaction.where(user_id: current_user.id).group_by_day(:date).sum(:amount)
  end

  private

  def transaction_params
    params.require(:transaction).permit(:amount, :description, :category_id, :date)
  end

end
