Rails.application.routes.draw do
  
  resources :user_submissions
  resources :users
  resources :mashups

  #for login 
  post "/login", to: "sessions#create"
  #create new user
  post "/signup", to: "users#create"
  #allows user to stay logged in 
  get "/me", to: "users#show"
  #to log the user out 
  delete "/logout", to: "sessions#destroy"

  get "/my_submissions", to: "user_submissions#my_submissions"
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
