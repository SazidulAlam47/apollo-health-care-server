/*
  Warnings:

  - A unique constraint covering the columns `[doctorId,scheduleId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[patientId,scheduleId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "appointments_scheduleId_key";

-- CreateIndex
CREATE UNIQUE INDEX "appointments_doctorId_scheduleId_key" ON "appointments"("doctorId", "scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "appointments_patientId_scheduleId_key" ON "appointments"("patientId", "scheduleId");
