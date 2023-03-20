import { v4 as uuid } from "uuid";

export class RecadoModel {
    private idRecado: string;
    private arquivado: boolean;
    private deletado: boolean;

    private constructor(
        private idUsuario: string,
        private titulo: string,
        private descricao: string,
        private data: string
    ) {
        this.idRecado = uuid();
        this.idUsuario = idUsuario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.arquivado = false;
        this.deletado = false;
    }

    public static create(idUsuario: string, titulo: string, descricao: string, data: string) {
        return new RecadoModel(idUsuario, titulo, descricao, data);
    };
}