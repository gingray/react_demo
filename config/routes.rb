Rails.application.routes.draw do

  devise_for :users
  root 'home#index'
  post 'home/fetch_data', as: 'fetch_data'
end
