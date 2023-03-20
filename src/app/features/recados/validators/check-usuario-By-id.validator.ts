import { Request, Response, NextFunction } from "express";
import { UsuariosEntity } from "../../../shared/entities/usuarios.entity";
import { HttpHelper } from "../../../shared/utils/httpHelper/httpHelper";

export async function CheckExistUserById(req: Request, res: Response, next: NextFunction) {
    let { idUsuario } = req.params;

    if (!idUsuario) {
        idUsuario = req.body['idUsuario'];
    }

    const checkExistUser = await UsuariosEntity.findOne({ where: { idUsuario } });

    if (!checkExistUser) {
        return HttpHelper.error(
            res,
            'Requisição invalida, id não encontrado',
            400,
            null,
        )
    }

    return next();
}