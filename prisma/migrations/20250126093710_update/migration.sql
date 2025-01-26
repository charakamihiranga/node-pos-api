-- CreateTable
CREATE TABLE `customer` (
    `email` VARCHAR(100) NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `nic` VARCHAR(20) NOT NULL,
    `phone` INTEGER NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `Name` VARCHAR(100) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    `Quantity` INTEGER NOT NULL,
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order` (
    `customerID` INTEGER NOT NULL,
    `orderDate` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `orderId` INTEGER NOT NULL AUTO_INCREMENT,

    INDEX `customerID`(`customerID`),
    PRIMARY KEY (`orderId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orderdetails` (
    `itemID` INTEGER NOT NULL,
    `orderDetailId` INTEGER NOT NULL AUTO_INCREMENT,
    `orderID` INTEGER NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `quantity` INTEGER NOT NULL,

    INDEX `itemID`(`itemID`),
    INDEX `orderID`(`orderID`),
    PRIMARY KEY (`orderDetailId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
