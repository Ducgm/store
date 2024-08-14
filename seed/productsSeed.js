const mongoose = require("mongoose");
const Product = require("../models/products");
require("dotenv").config();

const productsSeeder = [
  {
    name: "Premium Dog Kibble",
    description: "High-quality kibble made with real chicken and vegetables, perfect for adult dogs.",
    price: 45.99,
    stock: 120,
    image_url: "https://example.com/images/premium-dog-kibble.jpg",
  },
  {
    name: "Grain-Free Cat Food",
    description: "Nutrient-rich, grain-free formula with salmon and sweet potato for cats of all ages.",
    price: 38.5,
    stock: 75,
    image_url: "https://example.com/images/grain-free-cat-food.jpg",
  },
  {
    name: "Puppy Starter Pack",
    description: "A complete starter pack for puppies including kibble, wet food, and treats.",
    price: 55.0,
    stock: 50,
    image_url: "https://example.com/images/puppy-starter-pack.jpg",
  },
  {
    name: "Organic Bird Seed Mix",
    description: "A premium blend of organic seeds for small to medium-sized birds.",
    price: 22.75,
    stock: 200,
    image_url: "https://example.com/images/organic-bird-seed-mix.jpg",
  },
  {
    name: "Fish Food Flakes",
    description: "Balanced nutrition for all freshwater aquarium fish with added vitamins.",
    price: 15.99,
    stock: 300,
    image_url: "https://example.com/images/fish-food-flakes.jpg",
  },
  {
    name: "Rabbit Pellets",
    description: "Nutritious pellets enriched with fiber and essential vitamins for rabbits.",
    price: 27.4,
    stock: 60,
    image_url: "https://example.com/images/rabbit-pellets.jpg",
  },
  {
    name: "Turtle Sticks",
    description: "Floating food sticks enriched with calcium for healthy turtles.",
    price: 18.25,
    stock: 80,
    image_url: "https://example.com/images/turtle-sticks.jpg",
  },
  {
    name: "Kitten Wet Food Variety Pack",
    description: "A variety pack of wet food pouches, ideal for kittens during the weaning stage.",
    price: 42.0,
    stock: 40,
    image_url: "https://example.com/images/kitten-wet-food-variety-pack.jpg",
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
    await Product.deleteMany();
    await Product.insertMany(productsSeeder);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  } finally {
    mongoose.connection.close();
  }
}

module.exports = seedDatabase;
