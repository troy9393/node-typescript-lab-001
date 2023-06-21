"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const configuration_1 = __importDefault(require("../configuration"));
const employees_1 = __importDefault(require("./employees"));
const products_1 = __importDefault(require("./products"));
const queryHandling_1 = __importDefault(require("./queryHandling"));
const sequelize = configuration_1.default.getInstance();
employees_1.default.initModel(sequelize);
products_1.default.initModel(sequelize);
queryHandling_1.default.initModel(sequelize);
exports.db = {
    sequelize,
    Employees: employees_1.default,
    Products: products_1.default,
    QueryHandling: queryHandling_1.default,
};
