Rails.application.routes.draw do

  resources :users, only: [:new, :create, :show]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/transactions', to: 'transactions#index'

  namespace :admin do
    resources :categories, only: [:index, :new, :create, :edit, :update, :destroy]
  end

  resources :categories, only: [:index, :show] do
    resources :transactions #, except: [:show]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create, :show]
    end
  end

end
