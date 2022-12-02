Rails.application.routes.draw do
  # resources :follows
  get "/api/follows", to: "follows#index"
  post "/api/follows", to: "follows#create"
  delete "/api/follows/:id", to: "follows#destroy"

  resources :favorites, only: [:index, :show]
  get "/api/favorites", to: "favorites#index"
  post "/api/favorites", to: "favorites#create"
  delete "/api/favorites/:id", to: "favorites#destroy"

  # resources :comments
  get "/api/comments", to: "comments#index"
  post "/api/comments", to: "comments#create"

  # resources :movies
  get "/api/movies", to: "movies#index"
  get "/api/movies", to: "movies#create"
  get "/api/movies/:imdb_id", to: "movies#show"

  # resources :users
  get "/api/users", to: "users#index"
  get "/api/users/:id", to: "users#details"
  patch "/api/users/:id", to: "users#update"
  delete "/api/users/delete", to: "users#destroy"

  get "/api/me", to: "users#show"
  post "/api/signup", to: "users#create"

  #Sessions

  post "/api/login", to: "sessions#create"
  delete "/api/logout", to: "sessions#destroy"
end
