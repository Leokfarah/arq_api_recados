import { UsuariosEntity } from "../../../shared/entities/usuarios.entity";


export class UsuariosRepository {
    static async addUsuario(email: string, senha: string): Promise<UsuariosEntity | null | false> {
        const newUser = UsuariosEntity.create({ email, senha });
        const resposta = await newUser.save();
        return resposta;
    }

    static async verificaUser(email: string): Promise<UsuariosEntity | null | false> {
        const existEmail = await UsuariosEntity.findOne({ where: { email } });
        return existEmail;
    }

    static async logarUsuario(email: string, senha: string): Promise<UsuariosEntity | null | false> {
        const checkExistUser = await UsuariosEntity.findOne({ where: { email, senha } });

        if (!checkExistUser) {
            return null;
        }

        return checkExistUser;
    }

}