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

  def payment
    @loan = current_user.loans.find(loan_payment_params[:id])
    original_payment = loan_payment_params[:payment].to_i
    original_loan_interest = @loan.interest
    if original_loan_interest && (original_payment <= original_loan_interest)
      subtract_interest(@loan, original_payment, false)
    elsif original_loan_interest && (original_payment >= original_loan_interest)
      leftover_payment = original_payment - original_loan_interest
      subtract_interest(@loan, original_payment, true)
      @loan.principal -= leftover_payment
    elsif @loan.principal && (original_payment >= @loan.principal)
      @loan.principal -= original_payment
    end
    @loan.save
    respond_with :api, :v1, @loan
  end

  private

  def subtract_interest(loan, payment, eliminate_all_interest)
    if eliminate_all_interest
      loan.interest = 0
    else
      loan.interest -= payment
    end
  end

  def loan_params
    params.require(:loan).permit(:name,
                                 :principal,
                                 :interest_rate,
                                 :interest)
  end

  def loan_payment_params
    params.require(:loan).permit(:id, :payment)
  end

end
