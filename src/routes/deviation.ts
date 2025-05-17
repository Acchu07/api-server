import {Router} from "express";
import getDeviation from "../controller/deviation.ts";

const router = Router();

router.get("/",getDeviation);

export default router;