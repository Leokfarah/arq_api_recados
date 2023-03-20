"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const httpHelper_1 = require("../../../shared/utils/httpHelper/httpHelper");
const usuario_usecase_1 = require("../usecases/usuario.usecase");
class UsuariosController {
    async create(req, res) {
        try {
            const { email, senha } = req.body;
            const useCaseCreateUser = await usuario_usecase_1.UsuarioUseCase.createUseCase(email, senha);
            if (!useCaseCreateUser) {
                return httpHelper_1.HttpHelper.error(res, 'credenciais inválidas', 401, null);
            }
            ;
            return httpHelper_1.HttpHelper.success(res, 'Usuário cadastrado com sucesso!', 201, { 'cadastrado': useCaseCreateUser.idUsuario });
        }
        catch {
            return httpHelper_1.HttpHelper.serverError(res);
        }
    }
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const useCaseloginUser = await usuario_usecase_1.UsuarioUseCase.loginUsecase(email, senha);
            if (!useCaseloginUser) {
                return httpHelper_1.HttpHelper.error(res, 'credenciais inválidas', 401, null);
            }
            return httpHelper_1.HttpHelper.success(res, 'Login Autorizado', 202, useCaseloginUser.idUsuario);
        }
        catch {
            return httpHelper_1.HttpHelper.serverError(res);
        }
    }
}
exports.UsuariosController = UsuariosController;
//# sourceMappingURL=usuario.controller.js.map