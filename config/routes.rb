Rails.application.routes.draw do

  resources :users, only: [:new, :create, :show] do
    resources :transactions, only: [:index]
  end

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/api/v1/transactions/total', to: 'api/v1/transactions#total'
  get '/api/v1/transactions/income', to: 'api/v1/transactions#income'

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
    end
  end

end
