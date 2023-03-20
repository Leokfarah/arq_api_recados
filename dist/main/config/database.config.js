"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const recados_entity_1 = require("../../app/shared/entities/recados.entity");
const usuarios_entity_1 = require("../../app/shared/entities/usuarios.entity");
const _1677726188898_CreateTableUsuarios_1 = require("../../app/shared/migrations/1677726188898-CreateTableUsuarios");
const _1677726194907_CreateTableRecados_1 = require("../../app/shared/migrations/1677726194907-CreateTableRecados");
const typeorm_1 = require("typeorm");
const typeorm_env_1 = require("../../app/envs/typeorm.env");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    url: typeorm_env_1.typeormEnv.url,
    synchronize: false,
    logging: false,
    entities: [usuarios_entity_1.UsuariosEntity, recados_entity_1.RecadosEntity],
    migrations: [_1677726188898_CreateTableUsuarios_1.CreateTableUsuarios1677726188898, _1677726194907_CreateTableRecados_1.CreateTableRecados1677726194907],
    // ssl: {
    //   rejectUnauthorized: false,
    // },
});
//# sourceMappingURL=database.config.js.map