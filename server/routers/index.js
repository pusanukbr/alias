import { Router } from 'express';
import userController from '../controllers/user-controller.js';
const router = new Router();

router.post('/registration', () => {
  userController.registration;
});
router.post('/signin', () => {
  userController.signin;
});
router.post('/logout', () => {
  userController.logout;
});
router.get('/user', () => {
  userController.getUser;
});

export default router;
