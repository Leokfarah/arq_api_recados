import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { RecadosEntity } from "../../../shared/entities/recados.entity";
import { RecadosUsecase } from "./recados.usecase";

export class CacheRecadosUsecase {
    static async cacheAdicionarRecado(recado: RecadosEntity) {
        const cache = new CacheRepository();
        //recado salvo individualmente (conforme solicitado na atividade)
        await cache.setEX(recado.idRecado, recado, 300);

        //listagem de todos os recados
        const lista = await cache.get(`RECADOS_ATIVOS_${recado.idUsuario}`) || [];
        lista.push(recado);
        await cache.setEX(`RECADOS_ATIVOS_${recado.idUsuario}`, lista, 300);
        return lista;
    }

    static async cacheSalvarRecadosAtivos(recados: RecadosEntity[]) {
        const cache = new CacheRepository();
        await cache.setEX(`RECADOS_ATIVOS_${recados[0].idUsuario}`, recados, 300);

        for (const recado of recados) {
            await cache.setEX(recado.idRecado, recado, 300);
        }
    }

    static async cacheGetRecadosAtivos(idUsuario: string) {
        const cache = new CacheRepository();
        const recadosAtivos = await cache.get(`RECADOS_ATIVOS_${idUsuario}`);
        return recadosAtivos;
    }

    static async cacheUpdateRecado(recado: RecadosEntity) {
        const cache = new CacheRepository();
        await cache.del(`RECADOS_ATIVOS_${recado.idUsuario}`);

        const recadosAtivos = await RecadosUsecase.getAllRecadosAtivos(recado.idUsuario);
        if (!recadosAtivos) return null;

        await this.cacheSalvarRecadosAtivos(recadosAtivos);
        return recadosAtivos;
    }

    static async cacheDesarquivarRecado(recado: RecadosEntity) {
        const cache = new CacheRepository();
        await cache.del(`RECADOS_ATIVOS_${recado.idUsuario}`);

        const recadosAtivos = await RecadosUsecase.getAllRecadosAtivos(recado.idUsuario);
        const recadosArquivados = await RecadosUsecase.getAllRecadosArquivados(recado.idUsuario);

        if (!recadosAtivos) return null;
        if (!recadosArquivados) return null;

        await this.cacheSalvarRecadosAtivos(recadosAtivos);
        return recadosArquivados;
    }
}