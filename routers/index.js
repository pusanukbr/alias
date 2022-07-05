const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const router = new Router();

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/refresh', userController.refresh);

module.exports = router;