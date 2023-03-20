"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecadoModel = void 0;
const uuid_1 = require("uuid");
class RecadoModel {
    idUsuario;
    titulo;
    descricao;
    data;
    idRecado;
    arquivado;
    deletado;
    constructor(idUsuario, titulo, descricao, data) {
        this.idUsuario = idUsuario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.idRecado = (0, uuid_1.v4)();
        this.idUsuario = idUsuario;
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = data;
        this.arquivado = false;
        this.deletado = false;
    }
    static create(idUsuario, titulo, descricao, data) {
        return new RecadoModel(idUsuario, titulo, descricao, data);
    }
    ;
}
exports.RecadoModel = RecadoModel;
//# sourceMappingURL=recados.model.js.map