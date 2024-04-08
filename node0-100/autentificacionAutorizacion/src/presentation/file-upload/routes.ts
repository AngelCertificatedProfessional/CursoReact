import { Router } from 'express';
import { AuthMiddleware } from '../middlewares/auth.middleware';
import { FileUploadController } from '../category/controller';

export class FileUploadRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new FileUploadController();
        // Definir las rutas
        //api/uploade/
        router.get('/single/:type', controller.uploadFile)
        router.post('/multiple/:type', controller.uploadMultipleFiles)
        return router;
    }
}