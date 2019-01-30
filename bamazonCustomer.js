require("dotenv").config();

var mysql = require("mysql");

var inquirer = require("inquirer");

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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //display all of the items
  afterConnected();
});

//display all of the items available for sale. Include the ids, names, and prices of products for sale.
function afterConnected() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
   
      // console.log(
      //   " ID: " +
      //   res[i].id +
      //     " | " +
      //     res[i].product_name +
      //     " | " +
      //     res[i].department_name +
      //     " | $ " +
      //     res[i].price +
      //     " | Available: " +
      //     res[i].stock_quantity
      //     + " | "
      // );


      console.table(res)
    
  
    dataArr = res;
    //run after display
    itemPurchase();
  
  });
};


//The app should then prompt users with two messages-
function itemPurchase(){
  inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "What item would you like to purchase?",
      validate: function (value) {
        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
        }
        console.log(" please enter a number 1-10")
        return false;
    }
    },
    {
      type: "input",
      name: "stock_quantity",
      message: "How many would you like to purchase?",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    }
 ]).then (function (answers) {
   //Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
  if (parseInt(answers.stock_quantity) > dataArr[answers.id - 1].stock_quantity) {
    //If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
    console.log("Insufficient Quantity! There are only " + dataArr[answers.id - 1].stock_quantity + " left in stock!")
      itemPurchase();
  } else {
    //However, if your store does have enough of the product, you should fulfill the customer's order.
    //Once the update goes through, show the customer the total cost of their purchase.
    console.log("Order Placed: " + (parseInt(answers.stock_quantity) * dataArr[answers.id - 1].price));
    var newQuantity = (dataArr[answers.id - 1].stock_quantity) - (parseInt(answers.stock_quantity));
    // console.log(newQuantity);
    connection.query("UPDATE products SET stock_quantity = ? WHERE id = ?", [newQuantity, answers.id], function(err){
      if (err) throw err;
      newOrder();
    });
  }
 })
};

function newOrder() {
  inquirer.prompt ({
    name: "yn",
    type: "list",
    message: "Would you like to place another order? ",
    choices: ["YES", "NO"]
  }).then (function(answer){
    if( answer.yn === "YES") {
      afterConnected();
    } else connection.end();
  }).catch(function (err) {
    console.log(err);
  })

}

































//This means updating the SQL database to reflect the remaining quantity.




