import { Response } from "express";
import { IResposta } from "../../interfaces/iResposta/iResposta";

export class HttpHelper {
    public static success(res: Response, mensagem: string, code?: number, dados?: any) {
        return res.status(code ?? 200).send({
            sucesso: true,
            mensagem,
            dados,
        } as IResposta);
    };

    public static error(res: Response, mensagem?: string, code?: number, dados?: null | false) {
        return res.status(code ?? 400).send({
            sucesso: false,
            mensagem,
            dados,
        } as IResposta);
    }

    public static serverError(res: Response, mensagem?: string, code?: number, dados?: null | false) {
        return res.status(code ?? 500).send({
            sucesso: false ?? dados,
            mensagem: 'erro ao se comunicar com o servidor' ?? mensagem,
            dados: null ?? dados
        });
    };
}