import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/utils/httpHelper/httpHelper";
import { UsuarioUseCase } from "../usecases/usuario.usecase";


export class UsuariosController {
    async create(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const useCaseCreateUser = await UsuarioUseCase.createUseCase(email, senha);

            if (!useCaseCreateUser) {
                return HttpHelper.error(
                    res,
                    'credenciais inválidas',
                    401,
                    null,
                )
            };

            return HttpHelper.success(
                res,
                'Usuário cadastrado com sucesso!',
                201,
                { 'cadastrado': useCaseCreateUser.idUsuario },
            )
        } catch {
            return HttpHelper.serverError(res)
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;
            const useCaseloginUser = await UsuarioUseCase.loginUsecase(email, senha);

            if (!useCaseloginUser) {
                return HttpHelper.error(
                    res,
                    'credenciais inválidas',
                    401,
                    null,
                )
            }

            return HttpHelper.success(
                res,
                'Login Autorizado',
                202,
                useCaseloginUser.idUsuario
            )
        } catch {
            return HttpHelper.serverError(res)
        }
    }

}