"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosController = void 0;
const httpHelper_1 = require("../../../shared/utils/httpHelper/httpHelper");
const recados_usecase_1 = require("../usecases/recados.usecase");
class RecadosController {
    static async create(req, res) {
        const { idUsuario, titulo, descricao, data } = req.body;
        const addRecado = await recados_usecase_1.RecadosUsecase.adicionarRecado(idUsuario, titulo, descricao, data);
        if (!addRecado) {
            return httpHelper_1.HttpHelper.error(res, 'Recado não criado', 400, null);
        }
        const recados = await recados_usecase_1.RecadosUsecase.getAllRecadosAtivos(idUsuario);
        if (!recados || recados.length === 0) {
            return httpHelper_1.HttpHelper.success(res, 'não há recados ativos', 200, recados);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recado cadastrado com sucesso', 201, recados);
    }
    static async getRecadosAtivos(req, res) {
        const { idUsuario } = req.params;
        const recadosAtivos = await recados_usecase_1.RecadosUsecase.getAllRecadosAtivos(idUsuario);
        if (!recadosAtivos || recadosAtivos.length === 0) {
            return httpHelper_1.HttpHelper.success(res, 'não há recados ativos', 200, recadosAtivos);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recados encontrados', 201, recadosAtivos);
    }
    static async getRecadosArquivados(req, res) {
        const { idUsuario } = req.params;
        const { arquivado } = req.query;
        if (arquivado === 'false') {
            return httpHelper_1.HttpHelper.error(res, 'Requisição inválida', 400, null);
        }
        if (arquivado === 'true') {
            const recadosArquivados = await recados_usecase_1.RecadosUsecase.getAllRecadosArquivados(idUsuario);
            if (!recadosArquivados) {
                return httpHelper_1.HttpHelper.error(res, 'Não há recados arquivados', 404, null);
            }
            return httpHelper_1.HttpHelper.success(res, 'Recados encontrados', 302, recadosArquivados);
        }
        return httpHelper_1.HttpHelper.error(res, 'Requisição inválida', 400, null);
    }
    static async getRecadosPorNome(req, res) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);
        const recadosPorNome = await recados_usecase_1.RecadosUsecase.getAllRecadosPorNome(idUsuario, tituloBusca);
        if (!recadosPorNome) {
            return httpHelper_1.HttpHelper.error(res, 'Recados inexistentes', 404, null);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recados encontrados', 302, recadosPorNome);
    }
    static async getRecadosArquivadosPorNome(req, res) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);
        const recadosArquivadosPorNome = await recados_usecase_1.RecadosUsecase.getAllRecadosArquivadosPorNome(idUsuario, tituloBusca);
        if (!recadosArquivadosPorNome) {
            return httpHelper_1.HttpHelper.error(res, 'Recados inexistentes', 404, null);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recados encontrados', 302, recadosArquivadosPorNome);
    }
    static async update(req, res) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;
        const updated = await recados_usecase_1.RecadosUsecase.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        if (updated === null) {
            return httpHelper_1.HttpHelper.error(res, 'Recados inexistentes', 404, null);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recado editado com sucesso', 302, updated);
    }
    static async desarquiva(req, res) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;
        const resposta = await recados_usecase_1.RecadosUsecase.desarquivarRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        if (resposta === null) {
            return httpHelper_1.HttpHelper.error(res, 'Recados inexistentes', 404, null);
        }
        return httpHelper_1.HttpHelper.success(res, 'Recado editado com sucesso', 302, resposta);
    }
}
exports.RecadosController = RecadosController;
//# sourceMappingURL=recados.controller.js.map