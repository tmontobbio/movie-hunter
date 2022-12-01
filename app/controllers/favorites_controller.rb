class FavoritesController < ApplicationController
  def index
    user = User.find_by(id: session[:user_id])
    movies = user.favorites.reverse.map { |f| Movie.find(f.movie_id) }

    render json: movies, status: :ok
  end

  def create
    #user = User.find(session[:user_id])
    render json: Favorite.create!(user_id: session[:user_id], movie_id: params[:movie_id]), status: :ok
  end

  def destroy
    favorite = Favorite.find_by(movie_id: params[:id])
    favorite.destroy
    head :no_content, status: :accepted
  end
end
