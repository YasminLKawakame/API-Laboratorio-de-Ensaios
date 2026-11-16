import express from "express";
import { cadastrarEnsaio, 
    listarEnsaios,
    buscarEnsaioPorID,
    atualizarEnsaio,
    excluirEnsaio 
} from "../controller/ensaioController.js"; 

const router = express.Router();

router.post("/", cadastrarEnsaio);
router.get("/", listarEnsaios);
router.get("/:id", buscarEnsaioPorID);
router.patch("/:id", atualizarEnsaio);
router.delete("/:id", excluirEnsaio);

export default router;