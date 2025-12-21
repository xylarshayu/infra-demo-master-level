import type { NextFunction, Request, Response } from "express";
import { HTTP_CODES } from "../constants/httpCodes.js";
import { getAllTenants, getTenantData } from "../services/tenants.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllTenantsController = asyncHandler(
	async (_req: Request, res: Response, _next: NextFunction) => {
		const result = await getAllTenants();
		res.status(HTTP_CODES.OK).json({
			success: true,
			pagination: {
				page: 1,
				limit: 10,
				total: result.length,
				pages: 1,
			},
			data: result,
		});
	},
);

export const getTenantController = asyncHandler(
	async (req: Request, res: Response, _next: NextFunction) => {
		const { id } = req.params;
		const result = await getTenantData(id);
		if (!result) {
			return res.status(HTTP_CODES.NOT_FOUND).json({
				success: false,
				message: "Tenant not found",
			});
		}
		res.status(HTTP_CODES.OK).json({
			success: true,
			data: result,
		});
	},
);
