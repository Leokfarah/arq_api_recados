"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCamposRecado = void 0;
const httpHelper_1 = require("../../../shared/utils/httpHelper/httpHelper");
function checkCamposRecado(req, res, next) {
    const { idUsuario, titulo, descricao, data } = req.body;
    if (!idUsuario || !titulo || !descricao || !data) {
        return httpHelper_1.HttpHelper.error(res, 'campos vazios', 400, null);
    }
    return next();
}
exports.checkCamposRecado = checkCamposRecado;
//# sourceMappingURL=check-campos-recado.validator.js.map