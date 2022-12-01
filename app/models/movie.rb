class Movie < ApplicationRecord
  has_many :comments
  has_many :users, through: :comments

  has_many :favorites
  has_many :users, through: :favorites

  def self.lookup(imdb_id)
    includes(comments: [:user]).find_or_create_by!(imdb_id: imdb_id) do |movie|
      response = HTTParty.get("https://www.omdbapi.com/?apikey=eea402bd&plot=full&i=#{imdb_id}")
      movie_data = JSON.parse response.body, symbolize_names: true
      if !movie_data[:Error]
        movie.title = movie_data[:Title]
        movie.year = movie_data[:Year]
        movie.rated = movie_data[:Rated]
        movie.released = movie_data[:Released]
        movie.runtime = movie_data[:Runtime]
        movie.genre = movie_data[:Genre]
        movie.director = movie_data[:Director]
        movie.writer = movie_data[:Writer]
        movie.actors = movie_data[:Actors]
        movie.plot = movie_data[:Plot]
        movie.language = movie_data[:Language]
        movie.country = movie_data[:Country]
        movie.awards = movie_data[:Awards]
        movie.poster = movie_data[:Poster]
        movie.metascore = movie_data[:Metascore]
        movie.imdb_rating = movie_data[:imdbRating]
        movie.imdb_votes = movie_data[:imdbVotes]
        movie.imdb_id = movie_data[:imdbID]
      else
        movie.errors.add(:imdb_id, movie_data[:Error])
      end
    end
  end
end
