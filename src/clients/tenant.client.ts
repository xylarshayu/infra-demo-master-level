import { env } from "../config/env.js";
import { createClient } from "./base/httpClient.js";

export const tenantClient = createClient(`${env.TENANT_BASE_URL}/tenant-ser`, {
	"x-internal-api-key": env.INTERNAL_API_KEY,
});
