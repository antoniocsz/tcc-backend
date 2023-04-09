-- CreateTable
CREATE TABLE "occurrences" (
    "_id" TEXT NOT NULL,
    "cameraId" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "frame" TEXT NOT NULL,

    CONSTRAINT "occurrences_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "polygons" (
    "_id" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "x1" DOUBLE PRECISION NOT NULL,
    "x2" DOUBLE PRECISION NOT NULL,
    "y1" DOUBLE PRECISION NOT NULL,
    "y2" DOUBLE PRECISION NOT NULL,
    "conf" DOUBLE PRECISION NOT NULL,
    "occurrenceId" TEXT NOT NULL,

    CONSTRAINT "polygons_pkey" PRIMARY KEY ("_id")
);

-- AddForeignKey
ALTER TABLE "polygons" ADD CONSTRAINT "polygons_occurrenceId_fkey" FOREIGN KEY ("occurrenceId") REFERENCES "occurrences"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
