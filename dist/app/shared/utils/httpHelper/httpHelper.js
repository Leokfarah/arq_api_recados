"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpHelper = void 0;
class HttpHelper {
    static success(res, mensagem, code, dados) {
        return res.status(code ?? 200).send({
            sucesso: true,
            mensagem,
            dados,
        });
    }
    ;
    static error(res, mensagem, code, dados) {
        return res.status(code ?? 400).send({
            sucesso: false,
            mensagem,
            dados,
        });
    }
    static serverError(res, mensagem, code, dados) {
        return res.status(code ?? 500).send({
            sucesso: false ?? dados,
            mensagem: 'erro ao se comunicar com o servidor' ?? mensagem,
            dados: null ?? dados
        });
    }
    ;
}
exports.HttpHelper = HttpHelper;
//# sourceMappingURL=httpHelper.js.map