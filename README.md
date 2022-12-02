# README

## Movie Hoarder

Welcome to my project! This site will serve as a platform that allows users to browse movies and their related data. Users will be allowed to save movies to their own playlist, and make personal notes about those movies. Users will also be able to join discussions related to movies with other users. Users will be able to view and share their list with other users.

Features:

-Login/Auth
-Serilized relationships
-Tokens/Cookies
-Custom routing
-Update user settings
-See other user's favorites
-Follow other users
-Add/Delete favorites
-Delete your account

This project was built on:

- Ruby 3.1.2
- React 18.2.0
- React-router-dom 6.4.2
- Node 16.17.1

## Running Locally:

Install dependencies

```
bundle i
```

Start the SQL server

```
// linux
sudo service postgresql start

// mac
brew services start postgresql
```

Create your database

```
rails db:create
```

Rails development server

```
rails s
```

React development server

```
npm start server --prefix client
```
