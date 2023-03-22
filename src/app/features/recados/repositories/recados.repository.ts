import { Like, Not } from "typeorm";
import { RecadosEntity } from "../../../shared/entities/recados.entity";

export class RecadosRepository {
    static async addRecado(idUsuario: string, titulo: string, descricao: string, data: string): Promise<RecadosEntity | null | false> {
        const newRecado = RecadosEntity.create({ idUsuario, titulo, descricao, data });
        const resposta = await newRecado.save();

        return resposta;
    }

    static async recadosAtivos(idUsuario: string): Promise<RecadosEntity[] | null | false> {
        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: Not(true),
                deletado: Not(true),
            },
        });

        if (!recados) {
            return null;
        }

        return recados;
    }

    static async recadosArquivados(idUsuario: string): Promise<RecadosEntity[] | null | false> {
        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                arquivado: Not(false),
                deletado: Not(true),
            },
        });

        if (!recados) {
            return null;
        }

        return recados;
    }

    static async recadosPorNome(idUsuario: string, titulo: string): Promise<RecadosEntity[] | null | false> {
        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                titulo: Like(`%${titulo}%`),
                arquivado: Not(true),
                deletado: Not(true),
            },
        });

        if (!recados) {
            return null;
        }

        return recados;
    }

    static async recadosArquivadosPorNome(idUsuario: string, titulo: string): Promise<RecadosEntity[] | null | false> {

        const recados = await RecadosEntity.find({
            where: {
                idUsuario,
                titulo: Like(`%${titulo}%`),
                arquivado: Not(false),
                deletado: Not(true),
            },
        });

        if (!recados || recados.length === 0) {
            return null;
        }

        return recados;
    }

    static async updateRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean): Promise<RecadosEntity[] | null | false> {
        const linhaParaEditar = await RecadosEntity.findOne({ where: { idRecado } });

        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();

            await RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);

            const recados = await this.recadosAtivos(idUsuario);

            return recados;
        }

        return null;
    }

    static async desarquivaRecado(idUsuario: string, idRecado: string, titulo: string, descricao: string, data: string, deletado: boolean, arquivado: boolean): Promise<RecadosEntity[] | null | false> {
        const linhaParaEditar = await RecadosEntity.findOne({ where: { idRecado } });

        if (linhaParaEditar) {
            linhaParaEditar.titulo = titulo;
            linhaParaEditar.descricao = descricao;
            linhaParaEditar.data = data;
            linhaParaEditar.deletado = deletado;
            linhaParaEditar.arquivado = arquivado;
            linhaParaEditar.dataAlteracao = new Date();

            await RecadosEntity.update(linhaParaEditar.idRecado, linhaParaEditar);

            const recados = await this.recadosArquivados(idUsuario);

            return recados;
        }

        return null;
    }
}