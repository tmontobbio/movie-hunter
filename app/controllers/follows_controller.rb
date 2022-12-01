class FollowsController < ApplicationController
  def index
    user = User.find(session[:user_id])
    render json: user.follows, include: "*.*"
  end

  def create
    new_follow = Follow.create!(follower_id: session[:user_id], followed_id: params[:followed_id])
    render json: new_follow, status: :created
  end

  def destroy
    Follow.find_by(followed_id: params[:id]).destroy
    head :no_content, status: :accepted
  end
end
