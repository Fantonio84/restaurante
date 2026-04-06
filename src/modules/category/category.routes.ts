import { Router } from "express";
import categoryController from "./category.controller.js";

const categoryRoutes = Router();

categoryRoutes.post("/", categoryController.create)
categoryRoutes.get("/", categoryController.findAll)
/*
    Parametro de Rota -> Fazem parte da URL e identifica um recurso
    Parametro de Rora -> Acesso -> request.params.id
    Query Params  -> São utilizados para filtros e consultas ->  Opcionais.
    Query Params -> Acesso -> request.query.pagina

*/

categoryRoutes.get("/:id", categoryController.findById);
categoryRoutes.put("/:id", categoryController.update);
categoryRoutes.delete("/:id", categoryController.delete);


export default categoryRoutes;