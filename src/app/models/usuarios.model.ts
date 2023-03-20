import { v4 as uuid } from "uuid";

export class UsuarioModel {
    private idUsuario: string;

    private constructor(
        private email: string,
        private senha: string,
        private id?: string
    ) {
        this.idUsuario = id ?? uuid();
        this.email = email;
        this.senha = senha;
    }

    public static create(email: string, senha: string, id?: string) {
        return new UsuarioModel(email, senha, id);
    };
}