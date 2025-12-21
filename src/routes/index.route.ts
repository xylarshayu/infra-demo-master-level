import { Router } from "express";
import {
	healthCheckController,
	isConnectedController,
} from "../controllers/index.controller.js";
import tenantRoutes from "./tenants.route.js";

const router = Router();

router.get("/health", healthCheckController);
router.get("/connected", isConnectedController);

router.use("/tenants", tenantRoutes);

export default router;
