import app from "./app.js";
import { closeHttpConnections } from "./clients/base/httpClient.js";
import logger from "./logger.js";

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
	logger.info(`Env is ${process.env.NODE_ENV}`);
	logger.info(`Master Server running on port ${PORT}`);
	logger.info(
		`Health check available at http://localhost:${PORT}/master-ser/health`,
	);
});

const gracefulShutdown = () => {
	logger.info("Received kill signal, shutting down gracefully");

	closeHttpConnections();

	server.close(() => {
		logger.info("Closed out remaining connections");
		process.exit(0);
	});

	setTimeout(() => {
		logger.error(
			"Could not close connections in time, forcefully shutting down",
		);
		process.exit(1);
	}, 10000);
};

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
