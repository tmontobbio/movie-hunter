class MoviesController < ApplicationController
  def index
    render json: Movie.all.reverse.sample(12), status: :ok
  end

  def show
    movie = Movie.lookup(params[:imdb_id])
    render json: movie
  end
end
