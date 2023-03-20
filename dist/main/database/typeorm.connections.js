"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = void 0;
require("dotenv/config");
require("reflect-metadata");
const database_config_1 = __importDefault(require("../config/database.config"));
class DatabaseConnection {
    static _connection;
    static async connect() {
        if (!this._connection) {
            this._connection = await database_config_1.default.initialize();
            console.log('Odete ta no BANCO da praça');
        }
    }
    static get connection() {
        if (!this._connection) {
            throw new Error("Database não conectado");
        }
        return this._connection;
    }
}
exports.DatabaseConnection = DatabaseConnection;
//# sourceMappingURL=typeorm.connections.js.map