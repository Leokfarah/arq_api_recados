"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existeEmailValidator = void 0;
const usuarios_repository_1 = require("../repositories/usuarios.repository");
const httpHelper_1 = require("../../../shared/utils/httpHelper/httpHelper");
const existeEmailValidator = async (req, res, next) => {
    const { email } = req.body;
    const checkExistEmail = await usuarios_repository_1.UsuariosRepository.verificaUser(email);
    if (checkExistEmail) {
        return httpHelper_1.HttpHelper.error(res, 'credenciais inválidas', 401, null);
    }
    return next();
};
exports.existeEmailValidator = existeEmailValidator;
//# sourceMappingURL=exist-usuario.validator.js.map