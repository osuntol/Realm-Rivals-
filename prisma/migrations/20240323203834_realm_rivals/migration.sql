-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "bio" VARCHAR(1000) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Standings" (
    "id" SERIAL NOT NULL,
    "league" INTEGER NOT NULL,
    "season" VARCHAR(255) NOT NULL,

    CONSTRAINT "Standings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leagues" (
    "id" SERIAL NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "search" VARCHAR(255) NOT NULL,

    CONSTRAINT "Leagues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamStatistics" (
    "id" SERIAL NOT NULL,
    "season" VARCHAR(255) NOT NULL,
    "league" INTEGER NOT NULL,

    CONSTRAINT "TeamStatistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QueryResults" (
    "id" SERIAL NOT NULL,
    "appMetadata" JSONB,

    CONSTRAINT "QueryResults_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Standings_league_key" ON "Standings"("league");

-- CreateIndex
CREATE UNIQUE INDEX "TeamStatistics_league_key" ON "TeamStatistics"("league");

-- CreateIndex
CREATE UNIQUE INDEX "QueryResults_id_key" ON "QueryResults"("id");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
