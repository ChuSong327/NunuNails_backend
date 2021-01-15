require('dotenv').config();
const faker = require("faker");
const mongoose = require("mongoose");

const Products = require("../db/products");

const dbUrl = `mongodb+srv://chucsong:${process.env.DB_PASSWORD}@cluster0.mbs6m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//db connection
mongoose.connect(dbUrl, { useNewUrlParser: true });

const BUILD_PRODUCTS_NUM = 500;

const productImagePath = [
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/1.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/2.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/3.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/4.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/5.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083817/Nunu%20Nails/6.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/7.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/8.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/9.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/10.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/11.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083818/Nunu%20Nails/12.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/13.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/15.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/16.jpg",
    "https://res.cloudinary.com/chu327/image/upload/v1533083819/Nunu%20Nails/17.jpg"
];

const productCategory = [ "press-on", "glue-on", "nude french"];

let done = 0;
for(let i = 0; i < BUILD_PRODUCTS_NUM; i++) {
    Products.create({
        name: "Nunu nails",
        category: productCategory[Math.floor(Math.random() * 3)], 
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        imagePath: productImagePath[Math.floor(Math.random() * 16)]
    });
    if(done === BUILD_PRODUCTS_NUM){
        mongoose.disconnect();
    }
};




 