const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();

router.post('/registration', userController.registration);
router.post('/signin', userController.signin);
router.post('/logout', userController.logout);
router.get('/user', userController.getUser);

module.exports = router;