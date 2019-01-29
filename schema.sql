DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;
-- create product table 
CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL, 
    price  DECIMAL (10,2),
    stock_quantity INTEGER(10),
    PRIMARY KEY (ID)
);
-- populate with 10 diff products 

SELECT * FROM products;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wireless Controller PS4", "video games", 46.96, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Micro USB Cable, 2pack", "cell phones & accessories", 7.89, 57);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wipeout Omega Collection PS4", "video games", 25.89, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ASTRO A50 Wireless Dolby Gaming Headset", "video games", 295.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4 Pro", "video games", 398.95, 168);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pathfinder Roleplaying Game: Core Rulebook", "books", 37.18, 61);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dungeons & Dragons Dungeon Master's Guide", "books", 22.74, 73);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Surge Citrus Flavored Soda 16fl oz. 12 cans", "grocery", 29.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ibuprofen Tablets 200 mg", "health", 8.22, 72);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("exploding kittens", "toys & games", 19.99, 7);

