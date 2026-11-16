import express from "express";
import { cadastrarAnalista, 
    listarAnalistas,
    buscarAnalistaPorID,
    atualizarAnalista,
    excluirAnalista 
} from "../controller/analistaController.js"; 

const router = express.Router();

router.post("/", cadastrarAnalista);
router.get("/", listarAnalistas);
router.get("/:id", buscarAnalistaPorID);
router.patch("/:id", atualizarAnalista);
router.delete("/:id", excluirAnalista);

export default router;