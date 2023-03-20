"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckExistUserById = void 0;
const usuarios_entity_1 = require("../../../shared/entities/usuarios.entity");
const httpHelper_1 = require("../../../shared/utils/httpHelper/httpHelper");
async function CheckExistUserById(req, res, next) {
    let { idUsuario } = req.params;
    if (!idUsuario) {
        idUsuario = req.body['idUsuario'];
    }
    const checkExistUser = await usuarios_entity_1.UsuariosEntity.findOne({ where: { idUsuario } });
    if (!checkExistUser) {
        return httpHelper_1.HttpHelper.error(res, 'Requisição invalida, id não encontrado', 400, null);
    }
    return next();
}
exports.CheckExistUserById = CheckExistUserById;
//# sourceMappingURL=check-usuario-By-id.validator.js.map