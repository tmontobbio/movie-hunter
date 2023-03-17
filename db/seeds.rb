puts "destroying"

User.destroy_all
Favorite.destroy_all
Comment.destroy_all
Follow.destroy_all

puts "seeding"

#users
User.create!(username: "movietroll40", password: "password", avatar: "https://images.theconversation.com/files/90015/original/image-20150729-30889-ri221u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop")
User.create!(username: "buffmoviebuff", password: "password", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
User.create!(username: "tarentinofan415", password: "password", avatar: "https://i.insider.com/5dcc135ce94e86714253af21?width=1000&format=jpeg&auto=webp")
User.create!(username: "dontkillbill", password: "password", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywAcoeXoE0r5np2dHUibi1cICmTQb2WU-rg&usqp=CAU")
User.create!(username: "tyler", password: "password", avatar: "https://i.imgur.com/FOtaOAr.jpg")
User.create!(username: "100dollarbaby", password: "password", avatar: "https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg")
User.create!(username: "ladybug", password: "password", avatar: "http://cdn.onlinewebfonts.com/svg/img_264570.png")
User.create(username:"tyler1", password:"password", password_confirmation:"password")
User.create(username:"tyler2", password:"password", password_confirmation:"password")
User.create(username:"tyler3", password:"password", password_confirmation:"password")
User.create(username:"tyler4", password:"password", password_confirmation:"password")
User.create(username:"tyler5", password:"password", password_confirmation:"password")
User.create(username:"tyler6", password:"password", password_confirmation:"password")
User.create(username:"tyler7", password:"password", password_confirmation:"password")
User.create(username:"tyler8", password:"password", password_confirmation:"password")
User.create(username:"tyler9", password:"password", password_confirmation:"password")
User.create(username:"tyler10", password:"password", password_confirmation:"password")
User.create(username:"tyler11", password:"password", password_confirmation:"password")
User.create(username:"tyler12", password:"password", password_confirmation:"password")
User.create(username:"tyler13", password:"password", password_confirmation:"password")
User.create(username:"tyler14", password:"password", password_confirmation:"password")
User.create(username:"tyler15", password:"password", password_confirmation:"password")
User.create(username:"tyler16", password:"password", password_confirmation:"password")
User.create(username:"tyler17", password:"password", password_confirmation:"password")
User.create(username:"tyler18", password:"password", password_confirmation:"password")
User.create(username:"tyler19", password:"password", password_confirmation:"password")
User.create(username:"tyler20", password:"password", password_confirmation:"password")
User.create(username:"tyler21", password:"password", password_confirmation:"password")
User.create(username:"tyler22", password:"password", password_confirmation:"password")
User.create(username:"tyler23", password:"password", password_confirmation:"password")
User.create(username:"tyler24", password:"password", password_confirmation:"password")
puts "done seeding!"
