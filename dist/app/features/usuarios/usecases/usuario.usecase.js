"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioUseCase = void 0;
const usuarios_repository_1 = require("../repositories/usuarios.repository");
class UsuarioUseCase {
    static async createUseCase(email, senha) {
        const newUser = await usuarios_repository_1.UsuariosRepository.addUsuario(email, senha);
        return newUser;
    }
    static async loginUsecase(email, senha) {
        const login = await usuarios_repository_1.UsuariosRepository.logarUsuario(email, senha);
        return login;
    }
}
exports.UsuarioUseCase = UsuarioUseCase;
//# sourceMappingURL=usuario.usecase.js.map