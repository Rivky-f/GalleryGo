-- CreateTable
CREATE TABLE "PhotographerClient" (
    "id" SERIAL NOT NULL,
    "photographerId" INTEGER NOT NULL,
    "clientId" INTEGER NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "clientName" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotographerClient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhotographerClient_photographerId_clientEmail_key" ON "PhotographerClient"("photographerId", "clientEmail");

-- AddForeignKey
ALTER TABLE "PhotographerClient" ADD CONSTRAINT "PhotographerClient_photographerId_fkey" FOREIGN KEY ("photographerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotographerClient" ADD CONSTRAINT "PhotographerClient_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
