"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recadosRoutes = void 0;
const express_1 = require("express");
const recados_controller_1 = require("../controllers/recados.controller");
const check_campos_recado_validator_1 = require("../validators/check-campos-recado.validator");
const check_usuario_By_id_validator_1 = require("../validators/check-usuario-By-id.validator");
exports.recadosRoutes = (0, express_1.Router)();
//criar novo recado:
exports.recadosRoutes.post('/novoRecado', [check_usuario_By_id_validator_1.CheckExistUserById, check_campos_recado_validator_1.checkCamposRecado], recados_controller_1.RecadosController.create);
//get todos os recados ativos do usuário:
exports.recadosRoutes.get('/ativos/:idUsuario', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.getRecadosAtivos);
//get todos os recados arquivados do usuário:
exports.recadosRoutes.get('/:idUsuario/arquivado', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.getRecadosArquivados);
//buscar recados do usuário pelo titulo
exports.recadosRoutes.get('/:idUsuario/buscar', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.getRecadosPorNome);
// //buscar recados arquivados do usuário pelo titulo
exports.recadosRoutes.get('/arquivados/:idUsuario/buscar', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.getRecadosArquivadosPorNome);
// // editar recados, arquivar (variavel arquivado = false para true) e soft delete (variavel deletado)
exports.recadosRoutes.put('/editar', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.update);
//editar recado para desarquivar (troca da variavel arquivada = true para false)
exports.recadosRoutes.put('/editar/desarquivar', [check_usuario_By_id_validator_1.CheckExistUserById], recados_controller_1.RecadosController.desarquiva);
//# sourceMappingURL=recados.routes.js.map