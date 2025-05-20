import express from 'express';
import { MetaControllers } from './meta.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth(), MetaControllers.getDashboardMetaData);

export const MetaRoutes = router;
