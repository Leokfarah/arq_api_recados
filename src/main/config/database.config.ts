import "dotenv/config";
import { RecadosEntity } from "../../app/shared/entities/recados.entity";
import { UsuariosEntity } from "../../app/shared/entities/usuarios.entity";
import { CreateTableUsuarios1677726188898 } from "../../app/shared/migrations/1677726188898-CreateTableUsuarios";
import { CreateTableRecados1677726194907 } from "../../app/shared/migrations/1677726194907-CreateTableRecados";
import { DataSource } from "typeorm";
import { typeormEnv } from "../../app/envs/typeorm.env";

export default new DataSource({
    type: "postgres",
    url: typeormEnv.url,
    synchronize: false,
    logging: false,
    entities: [UsuariosEntity, RecadosEntity],
    migrations: [CreateTableUsuarios1677726188898, CreateTableRecados1677726194907],
    // ssl: {
    //   rejectUnauthorized: false,
    // },
});
