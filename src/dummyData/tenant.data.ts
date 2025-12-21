import type { ITenant } from "../types/tenant.js";

const TENANTS: ITenant[] = [
	{
		id: "1",
		tenantId: 123,
		name: "Tenant One",
		description: "This is the first tenant",
		createdAt: new Date(),
		updatedAt: new Date(),
		isActive: true,
	},
	{
		id: "2",
		tenantId: 456,
		name: "Tenant Two",
		description: "This is the second tenant",
		createdAt: new Date(),
		updatedAt: new Date(),
		isActive: false,
	},
];

export default TENANTS;
