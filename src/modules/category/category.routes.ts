import { Router } from "express";
import categoryController from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/", categoryController.create)
categoryRoutes.get("/", categoryController.findAll)

export default categoryRoutes;