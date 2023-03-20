"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadosUsecase = void 0;
const recados_repository_1 = require("../repositories/recados.repository");
class RecadosUsecase {
    static async adicionarRecado(idUsuario, titulo, descricao, data) {
        const addRecado = await recados_repository_1.RecadosRepository.addRecado(idUsuario, titulo, descricao, data);
        return addRecado;
    }
    static async getAllRecadosAtivos(idUsuario) {
        const recadosAtivos = await recados_repository_1.RecadosRepository.recadosAtivos(idUsuario);
        return recadosAtivos;
    }
    static async getAllRecadosArquivados(idUsuario) {
        const recadosArquivados = await recados_repository_1.RecadosRepository.recadosArquivados(idUsuario);
        return recadosArquivados;
    }
    static async getAllRecadosPorNome(idUsuario, titulo) {
        const recadosAtivosPorNome = await recados_repository_1.RecadosRepository.recadosPorNome(idUsuario, titulo);
        return recadosAtivosPorNome;
    }
    static async getAllRecadosArquivadosPorNome(idUsuario, titulo) {
        const recadosArquivadosNome = await recados_repository_1.RecadosRepository.recadosArquivadosPorNome(idUsuario, titulo);
        return recadosArquivadosNome;
    }
    static async updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado) {
        const recadosAtualizados = await recados_repository_1.RecadosRepository.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        return recadosAtualizados;
    }
    static async desarquivarRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado) {
        const recados = await recados_repository_1.RecadosRepository.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        return recados;
    }
}
exports.RecadosUsecase = RecadosUsecase;
//# sourceMappingURL=recados.usecase.js.map