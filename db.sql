drop database if exists Thogakade;
-- Create database schema

CREATE DATABASE Thogakade;

USE Thogakade;

-- Table for customers

CREATE TABLE Customer (

                          id INT AUTO_INCREMENT PRIMARY KEY,

                          name VARCHAR(100) NOT NULL,

                          nic VARCHAR(20) NOT NULL,

                          email VARCHAR(100) UNIQUE NOT NULL,

                          phone INT NOT NULL


);



-- Table for items

CREATE TABLE Item (

                      id INT AUTO_INCREMENT PRIMARY KEY,

                      Name VARCHAR(100) NOT NULL,

                      Quantity INT NOT NULL,

                      Price DECIMAL(10, 2) NOT NULL

);



-- Table for orders

CREATE TABLE `Order` (

                         orderId INT AUTO_INCREMENT PRIMARY KEY,

                         customerID INT NOT NULL,

                         orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,

                         FOREIGN KEY (customerID) REFERENCES Customer(id) ON DELETE CASCADE

);



-- Table for order details

CREATE TABLE OrderDetails (

                              orderDetailId INT AUTO_INCREMENT PRIMARY KEY,

                              orderID INT NOT NULL,

                              itemID INT NOT NULL,

                              quantity INT NOT NULL,

                              price DECIMAL(10, 2) NOT NULL,

                              FOREIGN KEY (orderID) REFERENCES `Order`(orderId) ON DELETE CASCADE,

                              FOREIGN KEY (itemID) REFERENCES Item(id) ON DELETE CASCADE

);

