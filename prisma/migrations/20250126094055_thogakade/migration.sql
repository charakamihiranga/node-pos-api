/*
  Warnings:

  - You are about to drop the column `Name` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `Quantity` on the `item` table. All the data in the column will be lost.
  - Added the required column `name` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `item` DROP COLUMN `Name`,
    DROP COLUMN `Price`,
    DROP COLUMN `Quantity`,
    ADD COLUMN `name` VARCHAR(100) NOT NULL,
    ADD COLUMN `price` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `quantity` INTEGER NOT NULL;
