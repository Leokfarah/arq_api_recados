import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/utils/httpHelper/httpHelper";
import { RecadosUsecase } from "../usecases/recados.usecase";

export class RecadosController {
    static async create(req: Request, res: Response) {
        const { idUsuario, titulo, descricao, data } = req.body;

        const addRecado = await RecadosUsecase.adicionarRecado(idUsuario, titulo, descricao, data);

        if (!addRecado) {
            return HttpHelper.error(
                res,
                'Recado não criado',
                400,
                null,
            )
        }

        const recados = await RecadosUsecase.getAllRecadosAtivos(idUsuario);

        if (!recados || recados.length === 0) {
            return HttpHelper.success(
                res,
                'não há recados ativos',
                200,
                recados,
            )
        }

        return HttpHelper.success(
            res,
            'Recado cadastrado com sucesso',
            201,
            recados,
        )
    }

    static async getRecadosAtivos(req: Request, res: Response) {
        const { idUsuario } = req.params;

        const recadosAtivos = await RecadosUsecase.getAllRecadosAtivos(idUsuario);

        if (!recadosAtivos || recadosAtivos.length === 0) {
            return HttpHelper.success(
                res,
                'não há recados ativos',
                200,
                recadosAtivos,
            )
        }

        return HttpHelper.success(
            res,
            'Recados encontrados',
            201,
            recadosAtivos,
        )
    }

    static async getRecadosArquivados(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { arquivado } = req.query;

        if (arquivado === 'false') {
            return HttpHelper.error(
                res,
                'Requisição inválida',
                400,
                null,
            )
        }

        if (arquivado === 'true') {
            const recadosArquivados = await RecadosUsecase.getAllRecadosArquivados(idUsuario)
            if (!recadosArquivados) {
                return HttpHelper.error(
                    res,
                    'Não há recados arquivados',
                    404,
                    null,
                )
            }

            return HttpHelper.success(
                res,
                'Recados encontrados',
                302,
                recadosArquivados,
            )
        }

        return HttpHelper.error(
            res,
            'Requisição inválida',
            400,
            null,
        )
    }

    static async getRecadosPorNome(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);

        const recadosPorNome = await RecadosUsecase.getAllRecadosPorNome(idUsuario, tituloBusca);

        if (!recadosPorNome) {
            return HttpHelper.error(
                res,
                'Recados inexistentes',
                404,
                null,
            );
        }

        return HttpHelper.success(
            res,
            'Recados encontrados',
            302,
            recadosPorNome
        )
    }

    static async getRecadosArquivadosPorNome(req: Request, res: Response) {
        const { idUsuario } = req.params;
        const { titulo } = req.query;
        const tituloBusca = String(titulo);

        const recadosArquivadosPorNome = await RecadosUsecase.getAllRecadosArquivadosPorNome(idUsuario, tituloBusca);

        if (!recadosArquivadosPorNome) {
            return HttpHelper.error(
                res,
                'Recados inexistentes',
                404,
                null,
            );
        }

        return HttpHelper.success(
            res,
            'Recados encontrados',
            302,
            recadosArquivadosPorNome
        )
    }

    static async update(req: Request, res: Response) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;

        const updated = await RecadosUsecase.updateRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);


        if (updated === null) {
            return HttpHelper.error(
                res,
                'Recados inexistentes',
                404,
                null,
            );
        }

        return HttpHelper.success(
            res,
            'Recado editado com sucesso',
            302,
            updated
        )
    }

    static async desarquiva(req: Request, res: Response) {
        const { idUsuario, idRecado, titulo, descricao, data, arquivado, deletado } = req.body;

        const resposta = await RecadosUsecase.desarquivarRecado(idUsuario, idRecado, titulo, descricao, data, deletado, arquivado);


        if (resposta === null) {
            return HttpHelper.error(
                res,
                'Recados inexistentes',
                404,
                null,
            );
        }

        return HttpHelper.success(
            res,
            'Recado editado com sucesso',
            302,
            resposta
        )
    }
}
