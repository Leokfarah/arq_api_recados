import { DatabaseConnection } from "./main/database/typeorm.connections";
import { runServer } from "./main/server/express.server";

Promise.all([DatabaseConnection.connect()])
    .then(runServer)
    .catch((error: any) => {
        console.log('Erro ao inciar, a Odete se perdeu!');
        console.log(error);
    })