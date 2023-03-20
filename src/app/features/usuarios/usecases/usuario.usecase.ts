import { UsuariosRepository } from "../repositories/usuarios.repository";

export class UsuarioUseCase {
    static async createUseCase(email: string, senha: string) {
        const newUser = await UsuariosRepository.addUsuario(email, senha);
        return newUser;
    }

    static async loginUsecase(email: string, senha: string) {
        const login = await UsuariosRepository.logarUsuario(email, senha);
        return login;
    }
}