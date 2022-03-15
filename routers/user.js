import { Router } from " express";
import { signin } from "../controllers/user";
import { checkAuth } from "../middlewares/checkAuth";
const router = Router();
router.post("/users", checkAuth, signin);
