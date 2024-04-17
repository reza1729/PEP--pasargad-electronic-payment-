import express from "express";
import { Request, Response } from "express";
import Controller from "../Controller/Controller"
const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const controller = new Controller();
    const response = await controller.Set(req.body);
    return res.status(response.code).send(response);
  } catch (error) { return res.status(551).send(error) }
});
router.get("/", async (_req: Request, res: Response) => {

    try {
    const controller = new Controller();
    const response = await controller.Get();
    return res.status(200).send(response);
  } catch (error) { return res.status(551).send(error) }
});

export default router;