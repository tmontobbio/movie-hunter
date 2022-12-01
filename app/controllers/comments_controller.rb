class CommentsController < ApplicationController
  def index
    render json: Comment.all
  end

  def create
    render json: Comment.create!(comment_params), include: "*.*.*"
  end

  private

  def comment_params
    params.permit(:content, :movie_id, :user_id)
  end
end
