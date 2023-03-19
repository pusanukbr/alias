import { Router } from "express";
import userController from "../controllers/user-controller.js";
const router = new Router();

router.post("/registration", (req, res, next) => {
  new userController().registration(req, res, next);
});
router.post("/signin", (req, res, next) => {
  new userController().signin(req, res, next);
});
router.post("/logout", (req, res, next) => {
  new userController().logout(req, res, next);
});
router.get("/user/checkAuth", (req, res, next) => {
  new userController().checkAuth(req, res, next);
});
router.post("/user/changData", (req, res, next) => {
  new userController().changData(req, res, next);
});

export default router;
