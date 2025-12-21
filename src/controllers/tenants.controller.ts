import type { NextFunction, Request, Response } from "express";
import { HTTP_CODES } from "../constants/httpCodes.js";
import { parseQuery } from "../helpers/general.js";
import { getAllTenants, getTenantData } from "../services/tenants.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getAllTenantsController = asyncHandler(
	async (req: Request, res: Response, _next: NextFunction) => {
		const result = await getAllTenants(parseQuery(req));
		res.status(HTTP_CODES.OK).json({
			success: true,
			pagination: result.pagination,
			data: result.data,
		});
	},
);

export const getTenantController = asyncHandler(
	async (req: Request, res: Response, _next: NextFunction) => {
		const { id } = req.params;
		const result = await getTenantData(id, parseQuery(req));
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
