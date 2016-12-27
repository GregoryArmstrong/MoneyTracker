class Api::V1::LoansController < Api::V1::BaseController

  def index
    respond_with :api, :v1, Loan.where(user_id: current_user.id)
  end

  def create
    @loan = Loan.create(loan_params)
    current_user.loans << @loan
    respond_with :api, :v1, @loan
  end

  def destroy
    respond_with Loan.destroy(params[:id])
  end

  private

  def loan_params
    params.require(:loan).permit(:name,
                                 :principal,
                                 :interest_rate,
                                 :interest)
  end

end
