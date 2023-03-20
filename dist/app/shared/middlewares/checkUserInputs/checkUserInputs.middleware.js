"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserInputs = void 0;
const httpHelper_1 = require("../../utils/httpHelper/httpHelper");
const checkUserInputs = (req, res, next) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return httpHelper_1.HttpHelper.error(res, 'Dados não enviados', 402, null);
    }
    ;
    next();
};
exports.checkUserInputs = checkUserInputs;
//# sourceMappingURL=checkUserInputs.middleware.js.map