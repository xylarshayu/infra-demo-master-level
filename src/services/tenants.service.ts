import TENANTS from "../dummyData/tenant.data.js";

export const getAllTenants = async () => {
	return TENANTS;
};

export const getTenantData = async (id: string) => {
	return TENANTS.find((tenant) => tenant.id === id);
};
