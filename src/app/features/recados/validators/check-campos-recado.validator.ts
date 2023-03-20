import { Request, Response, NextFunction } from "express";
import { HttpHelper } from "../../../shared/utils/httpHelper/httpHelper";

export function checkCamposRecado(req: Request, res: Response, next: NextFunction) {
    const { idUsuario, titulo, descricao, data } = req.body

    if (!idUsuario || !titulo || !descricao || !data) {
        return HttpHelper.error(
            res,
            'campos vazios',
            400,
            null,
        )
    }

    return next()
}