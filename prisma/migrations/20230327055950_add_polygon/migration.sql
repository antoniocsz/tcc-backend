/*
  Warnings:

  - Added the required column `frame` to the `occurrences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_camera` to the `occurrences` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `occurrences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "occurrences" ADD COLUMN     "frame" TEXT NOT NULL,
ADD COLUMN     "id_camera" TEXT NOT NULL,
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "polygons" (
    "id" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "x1" DOUBLE PRECISION NOT NULL,
    "x2" DOUBLE PRECISION NOT NULL,
    "y1" DOUBLE PRECISION NOT NULL,
    "y2" DOUBLE PRECISION NOT NULL,
    "occurrenceId" TEXT NOT NULL,

    CONSTRAINT "polygons_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "polygons_occurrenceId_key" ON "polygons"("occurrenceId");

-- AddForeignKey
ALTER TABLE "polygons" ADD CONSTRAINT "polygons_occurrenceId_fkey" FOREIGN KEY ("occurrenceId") REFERENCES "occurrences"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
