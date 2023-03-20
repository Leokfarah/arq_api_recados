import { RecadosRepository } from "../repositories/recados.repository";

export class RecadosUsecase {
    static async adicionarRecado(idUsuario: string, titulo: string, descricao: string, data: string) {
        const addRecado = await RecadosRepository.addRecado(idUsuario, titulo, descricao, data);
        return addRecado;
    }

    static async getAllRecadosAtivos(idUsuario: string) {
        const recadosAtivos = await RecadosRepository.recadosAtivos(idUsuario);
        return recadosAtivos;
    }

    static async getAllRecadosArquivados(idUsuario: string) {
        const recadosArquivados = await RecadosRepository.recadosArquivados(idUsuario);
        return recadosArquivados;
    }

    static async getAllRecadosPorNome(idUsuario: string, titulo: string) {
        const recadosAtivosPorNome = await RecadosRepository.recadosPorNome(idUsuario, titulo);
        return recadosAtivosPorNome;
    }

    static async getAllRecadosArquivadosPorNome(idUsuario: string, titulo: string) {
        const recadosArquivadosNome = await RecadosRepository.recadosArquivadosPorNome(idUsuario, titulo);
        return recadosArquivadosNome;
    }

    static async updateRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean) {
        const recadosAtualizados = await RecadosRepository.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        return recadosAtualizados;
    }

    static async desarquivarRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean) {
        const recados = await RecadosRepository.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);
        return recados;
    }
}