/*
  Warnings:

  - You are about to drop the `plants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "plants";

-- CreateTable
CREATE TABLE "Plant" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "plantedAt" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" TEXT,

    CONSTRAINT "Plant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Plant_userId_idx" ON "Plant"("userId");

-- CreateIndex
CREATE INDEX "Plant_postId_idx" ON "Plant"("postId");

-- CreateIndex
CREATE INDEX "PlantData_plantId_idx" ON "PlantData"("plantId");

-- CreateIndex
CREATE INDEX "Post_userId_idx" ON "Post"("userId");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
