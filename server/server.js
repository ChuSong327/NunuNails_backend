require('dotenv').config();
const createError = require("http-errors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const express = require("express");
const app = express();
app.use(cors());

//import routers
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

//Use middleware
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(cookieParser());
app.use(bodyParser.json());

const dbUrl = `mongodb+srv://chucsong:${process.env.DB_PASSWORD}@cluster0.mbs6m.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//db connection
mongoose.connect(
    dbUrl,
    { useNewUrlParser: true }
);
const connection = mongoose.connection;

connection.once("open", () => {
    console.log(
        "MongoDB database connection established successfully!"
    );
});

//routes
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);
app.get("/", (_, res) => {
    res.status(200).json("Project root!");
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

//error handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error =
        req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App is listening on port: " + port);
});
