"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutes = void 0;
const recados_routes_1 = require("../../app/features/recados/routes/recados.routes");
const usuarios_routes_1 = require("../../app/features/usuarios/routes/usuarios.routes");
const appRoutes = (app) => {
    //rota teste:
    app.get('/', (_, response) => response.send('API Funcionando ou será que não'));
    //rotas usuarios
    app.use('/usuarios', usuarios_routes_1.usuariosRoutes);
    //rotas recados
    app.use('/recados', recados_routes_1.recadosRoutes);
};
exports.appRoutes = appRoutes;
//# sourceMappingURL=routes.server.js.map