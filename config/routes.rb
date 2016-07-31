Rails.application.routes.draw do

  devise_for :users

  match 'auth/:provider/callback/' => 'omniauth#shopify', via: :get
  root 'home#index'
  post 'home/fetch_data', as: 'fetch_data'
end
