/*
  Warnings:

  - You are about to drop the column `update` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "update",
ADD COLUMN     "following_url" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3);
