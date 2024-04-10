import { Router } from 'express';
import { FileUploadController } from './controller';
import { FileUploadService } from '../services/file-upload.services';
import { FileUploadMiddleware } from '../middlewares/file-upload.middleware';
import { TypeMiddleware } from '../middlewares/type.middleware';

export class FileUploadRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new FileUploadController(new FileUploadService());
        // Definir las rutas
        //api/uploade/
        router.use(FileUploadMiddleware.containFiles);
        router.use(TypeMiddleware.validFiles(['users', 'products', 'categories']));
        router.post('/single/:type', controller.uploadFile);
        router.post('/multiple/:type', controller.uploadMultipleFiles);
        return router;
    }
}