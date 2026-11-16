import express from "express";
import { cadastrarEquipamento, 
    listarEquipamentos,
    buscarEquipamentoPorID,
    atualizarEquipamento,
    excluirEquipamento 
} from "../controller/equipamentoController.js"; 

const router = express.Router();

router.post("/", cadastrarEquipamento);
router.get("/", listarEquipamentos);
router.get("/:id", buscarEquipamentoPorID);
router.patch("/:id", atualizarEquipamento);
router.delete("/:id", excluirEquipamento);

export default router;