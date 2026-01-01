/*
  Warnings:

  - You are about to drop the `PhotographerClient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PhotographerClient" DROP CONSTRAINT "PhotographerClient_clientId_fkey";

-- DropForeignKey
ALTER TABLE "PhotographerClient" DROP CONSTRAINT "PhotographerClient_photographerId_fkey";

-- DropTable
DROP TABLE "PhotographerClient";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photographers" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "studioName" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "photographers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "photographerId" INTEGER NOT NULL,
    "userId" INTEGER,
    "clientEmail" TEXT NOT NULL,
    "clientFirstName" TEXT,
    "clientLastName" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "inviteToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "clients_inviteToken_key" ON "clients"("inviteToken");

-- CreateIndex
CREATE UNIQUE INDEX "clients_photographerId_clientEmail_key" ON "clients"("photographerId", "clientEmail");

-- AddForeignKey
ALTER TABLE "photographers" ADD CONSTRAINT "photographers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "photographers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
