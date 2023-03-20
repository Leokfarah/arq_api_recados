import { Request, Response, NextFunction } from 'express';
import { IResposta } from '../../interfaces/iResposta/iResposta';
import { HttpHelper } from '../../utils/httpHelper/httpHelper';

export const checkUserInputs = (req: Request, res: Response, next: NextFunction) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return HttpHelper.error(
            res,
            'Dados não enviados',
            402,
            null,
        )
    };

    next();
};
