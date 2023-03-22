import { Router } from "express";
import { RecadosController } from "../controllers/recados.controller";
import { checkCamposRecado } from "../validators/check-campos-recado.validator";
import { CheckExistUserById } from "../validators/check-usuario-By-id.validator";

export const recadosRoutes = Router();

//criar novo recado:
recadosRoutes.post('/novoRecado', [CheckExistUserById, checkCamposRecado], RecadosController.create);

//get todos os recados ativos do usuário:
recadosRoutes.get('/ativos/:idUsuario', [CheckExistUserById], RecadosController.getRecadosAtivos);

//get todos os recados arquivados do usuário:
recadosRoutes.get('/:idUsuario/arquivado', [CheckExistUserById], RecadosController.getRecadosArquivados);

//buscar recados do usuário pelo titulo
recadosRoutes.get('/:idUsuario/buscar', [CheckExistUserById], RecadosController.getRecadosPorNome);

// //buscar recados arquivados do usuário pelo titulo
recadosRoutes.get('/arquivados/:idUsuario/buscar', [CheckExistUserById], RecadosController.getRecadosArquivadosPorNome)

// // editar recados, arquivar (variavel arquivado = false para true) e soft delete (variavel deletado)
recadosRoutes.put('/editar', [CheckExistUserById], RecadosController.update);

//editar recado para desarquivar (troca da variavel arquivada = true para false)
recadosRoutes.put('/editar/desarquivar', [CheckExistUserById], RecadosController.desarquiva);
