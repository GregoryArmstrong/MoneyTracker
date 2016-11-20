class Api::V1::MonthlyExpendituresController < Api::V1::BaseController

  def index
    respond_with :api, :v1, MonthlyExpenditure.where(user_id: current_user.id)
                                              .order(month: :asc)
  end

  def create
    @monthly_expenditure = MonthlyExpenditure.create(monthly_expenditure_params)
    current_user.monthly_expenditures << @monthly_expenditure
    respond_with :api, :v1, @monthly_expenditure
  end

  def update
    monthly_expenditure = MonthlyExpenditure.find(params["id"])
    monthly_expenditure.update_attributes(monthly_expenditure_params)
    respond_with monthly_expenditure, json: monthly_expenditure
  end

  def destroy
    respond_with MonthlyExpenditure.destroy(params[:id])
  end

  def monthly_totals
    monthly_totals_hash = MonthlyExpenditure.where(user_id: current_user.id)
                                            .group(:month).order(month: :asc)
                                            .sum(:amount)
    formatted_monthly_totals = monthly_totals_hash.map do |month, total|
      [month, total]
    end
    respond_with formatted_monthly_totals, json: formatted_monthly_totals
  end

  private

  def monthly_expenditure_params
    params.require(:monthly_expenditure).permit(:month, :amount, :category_id)
  end

end
