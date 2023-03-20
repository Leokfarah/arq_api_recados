import { Router } from "express";
import { checkUserInputs } from "../../../shared/middlewares/checkUserInputs/checkUserInputs.middleware";
import { UsuariosController } from "../controllers/usuario.controller";
import { existeEmailValidator } from "../validators/exist-usuario.validator";

export const usuariosRoutes = Router();
const usuarioController = new UsuariosController();

//cadastro de usuário:
usuariosRoutes.post('/cadastro', [checkUserInputs, existeEmailValidator], usuarioController.create);

//Login de usuário:
usuariosRoutes.post('/login', [checkUserInputs], usuarioController.login);
