const express = require("express");
const cors = require("cors");

const router = express.Router();

const corsOptions = {
    origin: [
        "http://www.nununails.com",
        "http://localhost:4200"
    ],
    optionSuccessStatus: 200
};

const Products = require("../../db/products");

router.options("/", cors(corsOptions));
router.get("/", cors(corsOptions), (req, res) => {
    Products.find()
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json(
                "This is the error: ",
                err
            );
        });
});

router.options("/press-on", cors(corsOptions));
router.get("/press-on", cors(corsOptions), (req, res) => {
    Products.find({ category: "press-on" })
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json("This is an error: ", err);
        });
});

router.options("/glue-on", cors(corsOptions));
router.get("/glue-on", cors(corsOptions), (req, res) => {
    Products.find({ category: "glue-on" })
        .then(products => {
            res.status(200).json(products);
        })
        .catch(err => {
            res.status(500).json("This is an error: ", err);
        });
});
router.options("/nude-french", cors(corsOptions));
router.get(
    "/nude-french",
    cors(corsOptions),
    (req, res) => {
        Products.find({ category: "nude french" })
            .then(products => {
                res.status(200).json(products);
            })
            .catch(err => {
                res.status(500).json(
                    "This is an error: ",
                    err
                );
            });
    }
);

router.options("/:product_id", cors(corsOptions));
router.get(
    "/:product_id",
    cors(corsOptions),
    (req, res) => {
        const productId = req.params.product_id;
        Products.findOne({ _id: productId })
            .then(product => {
                res.status(200).json(product);
            })
            .catch(err => {
                res.status(500).json(
                    "This is an error: ",
                    err
                );
            });
    }
);

module.exports = router;
