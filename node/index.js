//Controller
require("dotenv").config();
let MONGO_URL = process.env.MONGO_LINK;
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var uuid = require("uuid");

var productModel = require("./models/Products");
var cartModel = require("./models/Cart");
var app = express();

app.use(cors());

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose Connected!");
  })
  .on("error", (error) => {
    console.log("Error is:", error);
  });

app.use(express.json());

app.get("/getProducts", async (req, res) => {
  try {
    let products = await productModel.find({});
    res.send(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/getProductByName/:productName", async (req, res) => {
  try {
    let product = await productModel.find({ name: req.params.productName });
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});
app.get("/getProductByUniqueId/:productUniqueId", async (req, res) => {
  try {
    let product = await productModel.find({ _id: req.params.productUniqueId });
    res.send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/addProduct", async (req, res) => {
  try {
    let productId = uuid.v1();

    let { name, price, description, image } = req.body;

    let newProduct = new productModel({
      productId,
      name,
      price,
      description,
      image,
    });

    let newObject = await newProduct.save();

    res.send(newObject);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/removeProduct/:id", async (req, res) => {
  productModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      cartModel
        .deleteMany()
        .then(() => {
          res.status(200).json({
            message: "Deleted!",
          });
        })
        .catch((error) => {
          res.status(400).json({
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.post("/addToCart", async (req, res) => {
  try {
    const cart = new cartModel({});
    productObject = req.body;
    cart.products.push(productObject);
    await cart.save();
    res.send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/getCart", async (req, res) => {
  try {
    let cart = await cartModel.find({});
    res.send(cart);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.delete("/removeFromCart/:id", async (req, res) => {
  cartModel
    .deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.delete("/clearCart", async (req, res) => {
  cartModel
    .deleteMany()
    .then(() => {
      res.status(200).json({
        message: "Deleted!",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
});

app.listen(8082, () => {
  console.log("Server is running at 8082...");
});
