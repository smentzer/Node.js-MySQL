require("dotenv").config();

var mysql = require("mysql");

var inquirer = require('inquirer')

var dataArr = [];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.MYSQL_PASSWORD,
  database: "bamazonDB"
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnected();
});
//display all of the items available for sale. Include the ids, names, and prices of products for sale.
function afterConnected() {



}

//The app should then prompt users with two messages-
//ID of the product they would like to buy.
//how many units of the product they would like to buy.
// function ItemPurchase(){





// }


//Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

//However, if your store does have enough of the product, you should fulfill the customer's order.
//This means updating the SQL database to reflect the remaining quantity.
//Once the update goes through, show the customer the total cost of their purchase.




