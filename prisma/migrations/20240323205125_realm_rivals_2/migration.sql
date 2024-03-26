/*
  Warnings:

  - You are about to drop the `QueryResults` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "QueryResults";

-- CreateTable
CREATE TABLE "QueryResults1" (
    "id" SERIAL NOT NULL,
    "appMetadata" JSONB,

    CONSTRAINT "QueryResults1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QueryResults1_id_key" ON "QueryResults1"("id");
