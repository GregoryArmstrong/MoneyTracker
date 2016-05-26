class Api::V1::MonthlyExpendituresController < Api::V1::BaseController

  def index
    respond_with :api, :v1, MonthlyExpenditure.where(user_id: current_user.id)
  end

end
