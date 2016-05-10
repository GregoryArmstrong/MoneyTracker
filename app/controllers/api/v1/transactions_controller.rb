class Api::V1::TransactionsController < Api::V1::BaseController

  def index
    respond_with :api, :v1, Transaction.where(user_id: current_user.id)
  end

  def create
    @transaction = Transaction.create(transaction_params)
    current_user.transactions << @transaction
    respond_with :api, :v1, @transaction
  end

  def destroy
    respond_with Transaction.destroy(params[:id])
  end

  private

  def transaction_params
    params.require(:transaction).permit(:amount, :description)
  end

end
