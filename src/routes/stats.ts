import {Router} from "express";
import { getStats } from "../controller/stats.ts";

const router = Router();

router.get("/",getStats); // ToDo Add Query Validator middleware to ensure coin is present and is string - Check express validator later

export default router;