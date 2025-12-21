import { Router } from "express";
import {
	getAllTenantsController,
	getTenantController,
} from "../controllers/tenants.controller.js";

const router = Router();

router.get("/", getAllTenantsController);
router.get("/:id", getTenantController);

export default router;
