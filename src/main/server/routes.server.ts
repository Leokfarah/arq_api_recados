import { Express } from "express"
import { recadosRoutes } from "../../app/features/recados/routes/recados.routes";
import { usuariosRoutes } from "../../app/features/usuarios/routes/usuarios.routes";

export const appRoutes = (app: Express) => {
    //rota teste:
    app.get('/', (_, response) => response.send('API Funcionando ou será que não'));

    //rotas usuarios
    app.use('/usuarios', usuariosRoutes)

    //rotas recados
    app.use('/recados', recadosRoutes)
}