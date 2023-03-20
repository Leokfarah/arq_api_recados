import { UsuariosRepository } from "../repositories/usuarios.repository";
import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/utils/httpHelper/httpHelper";


export const existeEmailValidator = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;

    const checkExistEmail = await UsuariosRepository.verificaUser(email);

    if (checkExistEmail) {
        return HttpHelper.error(
            res,
            'credenciais inválidas',
            401,
            null,
        )
    }

    return next();
}
