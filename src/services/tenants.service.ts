import TENANTS from "../dummyData/tenant.data.js";
import type { ParsedQuery } from "../types/index.js";

export const getAllTenants = async (_parsedQuery: ParsedQuery) => {
	return {
		data: TENANTS,
		pagination: {
			page: 1,
			limit: 10,
			total: TENANTS.length,
			pages: 1,
		},
	};
};

export const getTenantData = async (id: string, _parsedQuery: ParsedQuery) => {
	return TENANTS.find((tenant) => tenant.id === id);
};
