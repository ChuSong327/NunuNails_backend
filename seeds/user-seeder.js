require('dotenv').config();
const faker = require("faker");
const mongoose = require("mongoose");

const Users = require("../db/users");

const dbUrl = `mongodb+srv://chucsong:${process.env.DB_PASSWORD}@cluster0.mbs6m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;


//db connection
mongoose.connect(dbUrl, { useNewUrlParser: true });

const BUILD_USER_NUM = 10;

let done = 0;
for(let i = 0; i < BUILD_USER_NUM; i++){
    Users.create({
        username: `user${i}`,
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
    });
    if(done === BUILD_USER_NUM) {
        mongoose.disconnect();
    }
};
