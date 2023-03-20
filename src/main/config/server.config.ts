import express from 'express'
import { appRoutes } from '../server/routes.server'
import cors from 'cors'

export const createServer = () => {
    const app = express();

    app.use(cors());

    app.use(express.json());

    appRoutes(app);

    return app;
}
