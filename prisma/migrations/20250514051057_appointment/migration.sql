/*
  Warnings:

  - A unique constraint covering the columns `[scheduleId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "appointments" ALTER COLUMN "status" SET DEFAULT 'SCHEDULED',
ALTER COLUMN "paymentStatus" SET DEFAULT 'UNPAID';

-- CreateIndex
CREATE UNIQUE INDEX "appointments_scheduleId_key" ON "appointments"("scheduleId");

-- AddForeignKey
ALTER TABLE "appointments" ADD CONSTRAINT "appointments_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
