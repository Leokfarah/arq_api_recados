"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModel = void 0;
const uuid_1 = require("uuid");
class UsuarioModel {
    email;
    senha;
    id;
    idUsuario;
    constructor(email, senha, id) {
        this.email = email;
        this.senha = senha;
        this.id = id;
        this.idUsuario = id ?? (0, uuid_1.v4)();
        this.email = email;
        this.senha = senha;
    }
    static create(email, senha, id) {
        return new UsuarioModel(email, senha, id);
    }
    ;
}
exports.UsuarioModel = UsuarioModel;
//# sourceMappingURL=usuarios.model.js.map