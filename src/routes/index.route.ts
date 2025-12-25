import { Router } from "express";
import {
	healthCheckController,
	isConnectedController,
} from "../controllers/index.controller.js";
import { streamify } from "../utils/sse.helper.js";
import tenantRoutes from "./tenants.route.js";

const router = Router();

router.get("/health", healthCheckController);
router.get("/connected", isConnectedController);

// SSE routes - streamify runs the controller immediately and then on the specified interval
router.get("/sse/connected", streamify(isConnectedController, 500));

router.use("/tenants", tenantRoutes);

export default router;
