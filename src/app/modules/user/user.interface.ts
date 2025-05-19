import { z } from 'zod';
import { User } from '../../../../generated/prisma';
import { UserValidations } from './user.validation';
import type { Express } from 'express';

export type TUserFilterKeys = keyof User;

type TProfilePictureObject = {
    profilePhoto?: string;
};

export type TCreateAdminPayload = z.infer<
    typeof UserValidations.createAdmin
> & {
    admin: TProfilePictureObject;
};

export type TCreateDoctorPayload = z.infer<
    typeof UserValidations.createDoctor
> & {
    doctor: TProfilePictureObject;
};

export type TCreatePatientPayload = z.infer<
    typeof UserValidations.createPatient
> & {
    patient: TProfilePictureObject;
};

export type TUpdateMyProfile = z.infer<typeof UserValidations.updateMyProfile> &
    TProfilePictureObject;

export type TFile = Express.Multer.File | undefined;
