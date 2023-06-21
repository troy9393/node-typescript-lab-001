import express, { Express } from 'express';
import cors from 'cors';
import * as routes from './routes';
import authorizationMiddleware from './middlewares/authorizationMiddleware';
import logger from './logging/logger';
import morganMiddleware from './middlewares/morganMiddleware';
import errorHandler from './middlewares/errorMiddleware';
import { error } from 'console';

class Server {
    private app: Express;

    constructor(app: Express) {
        if (!app) {
            throw new Error('Express instance is undefined');
        }

        // Middlewares
        this.app = app;
        this.app.set('trust proxy', true);
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morganMiddleware.config);
    }

    errorHandler() {
        this.app.use(errorHandler);
        return this;
    }

    routes() {
        this.app.use('/_gtg', routes.gtgRoute);
        this.app.use('/employees', routes.employeeRoute);
        this.app.use('/products', routes.productRoute);
        this.app.use('/query-handling', routes.queryHandlingRoute)
        return this;
    }

    start(port: string) {
        this.app.listen(port, () => {
            logger.info(`[server]: server is listening at  port ${port}`);
        });
    }
}

const createServer = (app: Express) => new Server(app);

export default createServer;
