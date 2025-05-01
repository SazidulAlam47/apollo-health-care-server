-- AlterTable
ALTER TABLE "patient_health_data" ALTER COLUMN "bloodGroup" DROP NOT NULL,
ALTER COLUMN "hasAllergies" SET DEFAULT false,
ALTER COLUMN "hasDiabetes" SET DEFAULT false,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "smokingStatus" SET DEFAULT false,
ALTER COLUMN "dietaryPreferences" DROP NOT NULL,
ALTER COLUMN "pregnancyStatus" SET DEFAULT false,
ALTER COLUMN "mentalHealthHistory" DROP NOT NULL,
ALTER COLUMN "immunizationStatus" DROP NOT NULL,
ALTER COLUMN "hasPastSurgeries" SET DEFAULT false,
ALTER COLUMN "recentAnxiety" SET DEFAULT false,
ALTER COLUMN "recentDepression" SET DEFAULT false;
