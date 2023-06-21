import express, {
    Request,
    Response,
    RequestHandler,
    NextFunction,
} from 'express';

import QueryHandlingService from '../services/queryHandlingService';

const router = express.Router();

router.get('/', async (req: Request, resp: Response, next) => {
    try {
        const queryHandling =
            await QueryHandlingService.getInstance().findAll();

        resp.status(200).json(queryHandling);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const existingQueryHandling =
            await QueryHandlingService.getInstance().findById(req.params.id);

        if (existingQueryHandling) {
            resp.status(200).json(existingQueryHandling);
        } else {
            resp.status(404).json({
                message: `query_handling_not_found: ${req.params.id}`,
            });
        }
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, resp: Response, next: NextFunction) => {
    try {
        const payload = { ...req.body };

        const newQueryHandling = await QueryHandlingService.getInstance().save(
            payload
        );

        resp.status(201).json({ ...newQueryHandling.dataValues });
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req: Request, res: Response, next) => {
    try {
        const queryHandlingId = req.params.id;
        const data = await QueryHandlingService.getInstance().update(
            queryHandlingId,
            {
                ...req.body,
            }
        );

        res.status(200).json(data);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req: Request, res: Response, next) => {
    try {
        const queryHandlingId = req.params.id;
        await QueryHandlingService.getInstance().deleteByPrimaryKey(
            queryHandlingId
        );

        res.status(200).json({
            message: `query_handling_successfully_deleted: ${queryHandlingId}`,
        });
    } catch (err) {
        next(err);
    }
});

export default router;
