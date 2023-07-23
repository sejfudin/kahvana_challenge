import { Router } from "express";
import { addUser, getUser } from "../controllers/userControllers";

const router = Router();

router.post("/", addUser);
router.get("/:id", getUser);

// router.route("/:id").get().put().delete();

export default router;
