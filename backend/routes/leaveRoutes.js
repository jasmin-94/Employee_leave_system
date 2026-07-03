import express from "express";
import { applyLeave,getMyLeaves,getPendingLeaves,approveLeave,rejectLeave,} from "../controllers/leaveController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, applyLeave);
router.get("/", authMiddleware, getMyLeaves);

router.get("/pending", authMiddleware, getPendingLeaves);

router.put(
  "/:id/approve",
  authMiddleware,
  approveLeave
);

router.put(
  "/:id/reject",
  authMiddleware,
  rejectLeave
);

export default router;