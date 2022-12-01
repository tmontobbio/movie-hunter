class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :rated, :released, :runtime, :genre, :director, :writer, :actors, :language, :country, :awards, :poster, :metascore, :imdb_rating, :imdb_votes, :imdb_id #, :comments #, :summary
  has_many :comments
  # def comments
  #   object.comments
  # end

  # def summary
  #   "#{self.object.plot[0..199]}..."
  # end
end
