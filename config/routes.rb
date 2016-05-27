Rails.application.routes.draw do

  resources :users, only: [:new, :create, :show] do
    resources :transactions, only: [:index]
    resources :monthly_expenditures, only: [:index]
  end

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/api/v1/transactions/total', to: 'api/v1/transactions#total'
  get '/api/v1/transactions/health', to: 'api/v1/transactions#health'
  get '/api/v1/transactions/food', to: 'api/v1/transactions#food'
  get '/api/v1/transactions/transportation', to: 'api/v1/transactions#transportation'
  get '/api/v1/transactions/entertainment', to: 'api/v1/transactions#entertainment'
  get '/api/v1/transactions/miscellaneous', to: 'api/v1/transactions#miscellaneous'
  get '/api/v1/transactions/income', to: 'api/v1/transactions#income'
  get '/api/v1/transactions/daily_total', to: 'api/v1/transactions#daily_total'

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
