## Installing NPM and node.
npm install -g npm

## Installing Angular cli
Install homebrew and then brew install angular-cli

## Creating a Node Application
Create a folder, make an index.js/app.js file. Write the command {npm init} to initialise Node in the folder, it will create package.json.

## Libraries used in Node.js
Installing Express, dotenv, Mongoose, cors and uuid.

## Creating a .env file
To store passwords and other confidential things. Here I am storing the MONGO_LINK to make connection with MongoDB.

## Running Node Application
Installing nodemon to run the project using {nodemon app}

## Connecting MongoDB Atlas with node js application
Making a connection to the cluster of Atlas, using Mongodb+srv link

## Creating an Angular Application
Command {ng new "project_name"}. Command {ng serve} to run the project.
Creating components using the command {ng g c "component_name"} and service by {ng g s "service_name"}

## Models Created
1. Products model for storing and retrieving products
2. Cart model to add products to it

## APIs used
1. /getProducts to get all the products
2. /getProductByName/:productName to get a product by productName
3. /getProductByUniqueId/:productUniqueId to get a product by productUniqueId
4. /addProduct to add a product to the collection
5. /removeProduct/:id to remove a product
6. /addToCart to add a product to the cart
7. /getCart to get cart products
8. /removeFromCart/:id to remove a product from cart
9. /clearCart delete all products from the cart

## Libraries used in Angular
Used these libraries for styling
1. Angular material. ng add @angular/material
2. Bootstrap 4. npm install --save bootstrap

## Components used
1. Cartpage to show cart products
2. Mainpage to show all the products
3. Productpage to add a new product
4. Searchproduct to show a product after searching of it by its name from the mainpage
5. Showpage to show a product's details

## Service used
ProductService to make API calls between angular, node.js and storing & retrieving data from the MongoDB database.