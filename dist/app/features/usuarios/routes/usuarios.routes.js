"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosRoutes = void 0;
const express_1 = require("express");
const checkUserInputs_middleware_1 = require("../../../shared/middlewares/checkUserInputs/checkUserInputs.middleware");
const usuario_controller_1 = require("../controllers/usuario.controller");
const exist_usuario_validator_1 = require("../validators/exist-usuario.validator");
exports.usuariosRoutes = (0, express_1.Router)();
const usuarioController = new usuario_controller_1.UsuariosController();
//cadastro de usuário:
exports.usuariosRoutes.post('/cadastro', [checkUserInputs_middleware_1.checkUserInputs, exist_usuario_validator_1.existeEmailValidator], usuarioController.create);
//Login de usuário:
exports.usuariosRoutes.post('/login', [checkUserInputs_middleware_1.checkUserInputs], usuarioController.login);
//# sourceMappingURL=usuarios.routes.js.map