Rails.application.routes.draw do

  get '', to: 'main#index'

  resources :users, only: [:new, :create, :show] do
    resources :transactions, only: [:index]
    resources :monthly_expenditures, only: [:index]
  end

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/api/v1/transactions/total',            to: 'api/v1/transactions#total'
  get '/api/v1/transactions/health_insurance', to: 'api/v1/transactions#health_insurance'
  get '/api/v1/transactions/food',             to: 'api/v1/transactions#food'
  get '/api/v1/transactions/car_payment',      to: 'api/v1/transactions#car_payment'
  get '/api/v1/transactions/car_insurance',    to: 'api/v1/transactions#car_insurance'
  get '/api/v1/transactions/miscellaneous',    to: 'api/v1/transactions#miscellaneous'
  get '/api/v1/transactions/income',           to: 'api/v1/transactions#income'
  get '/api/v1/transactions/rent',             to: 'api/v1/transactions#rent'
  get '/api/v1/transactions/loan_payment',     to: 'api/v1/transactions#loan_payment'
  get '/api/v1/transactions/utilities',        to: 'api/v1/transactions#utilities'
  get '/api/v1/transactions/phone',            to: 'api/v1/transactions#phone'
  get '/api/v1/transactions/daily_total',      to: 'api/v1/transactions#daily_total'

  get '/api/v1/monthly_expenditures/monthly_totals', to: 'api/v1/monthly_expenditures#monthly_totals'

  namespace :admin do
    resources :categories, only: [:index, :new, :create, :edit, :update, :destroy]
  end

  resources :categories, only: [:index, :show] do
    resources :transactions #, except: [:show]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show]
      resources :transactions, only: [:index, :create, :show, :update, :destroy]
      resources :monthly_expenditures, only: [:index, :create, :show, :update, :destroy]
    end
  end


end
