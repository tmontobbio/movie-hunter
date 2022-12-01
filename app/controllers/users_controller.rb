class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  def index
    render json: User.where.not(id: session[:user_id]), status: :ok
  end

  def create
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :accepted
    else
      render json: { error: "Not logged in" }, status: :unauthorized
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    render json: user.update!(user_params), status: :accepted
  end

  def details
    user = User.find(params[:id])
    movies = user.favorites.map { |f| Movie.find(f.movie_id) }
    render json: movies, status: :ok
  end

  private

  def invalid_record(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

  def user_params
    params.permit(:username, :avatar, :password, :password_confirmation)
  end
end
