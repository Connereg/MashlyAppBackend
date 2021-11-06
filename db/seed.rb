puts "🌱 Seeding Users..."
50.times do
   User.create(username: Faker::Name.name, password: "test")
end