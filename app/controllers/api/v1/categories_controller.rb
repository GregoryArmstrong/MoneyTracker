class Api::V1::CategoriesController < Api::V1::BaseController

  def index
    respond_with :api, :v1, Category.all.order(name: :asc)
  end

  def destroy
    respond_with Category.destroy(params[:id])
  end

  def create
    @category = Category.create(category_params)
    respond_with :api, :v1, @category
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

end
