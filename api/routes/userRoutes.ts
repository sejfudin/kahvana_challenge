import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userControllers";

const router = Router();

router.post("/", addUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
