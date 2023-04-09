/*
  Warnings:

  - The primary key for the `occurrences` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `occurrences` table. All the data in the column will be lost.
  - The primary key for the `polygons` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `_id` on the `polygons` table. All the data in the column will be lost.
  - The required column `id` was added to the `occurrences` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `polygons` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "polygons" DROP CONSTRAINT "polygons_occurrenceId_fkey";

-- AlterTable
ALTER TABLE "occurrences" DROP CONSTRAINT "occurrences_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "occurrences_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "polygons" DROP CONSTRAINT "polygons_pkey",
DROP COLUMN "_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "polygons_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "polygons" ADD CONSTRAINT "polygons_occurrenceId_fkey" FOREIGN KEY ("occurrenceId") REFERENCES "occurrences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
