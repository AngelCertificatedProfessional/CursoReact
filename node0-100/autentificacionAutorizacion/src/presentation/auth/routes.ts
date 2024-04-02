import { envs } from './../../config'
import { Router } from 'express';
import { AuthController } from './controller';
import { AuthServices, EmailService } from '../services';
export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const emailService = new EmailService(
            envs.MAILER_SERVICE,
            envs.MAILER_EMAIL,
            envs.MAILER_SECRET_KEY)
        const authService = new AuthServices(emailService)
        const controller = new AuthController(authService)

        // Definir las rutas
        router.post('/login', controller.loginUser);
        router.post('/register', controller.register);
        router.get('/validate-email/:token', controller.validateEmail);
        return router;
    }
}