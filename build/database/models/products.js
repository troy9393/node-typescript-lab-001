"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Products extends sequelize_1.Model {
    static initModel(sequelize) {
        Products.init({
            ProdID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            ProdName: {
                type: sequelize_1.DataTypes.STRING,
            },
            Base_Cost: {
                type: sequelize_1.DataTypes.DOUBLE,
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'Product',
            timestamps: false,
        });
    }
}
exports.default = Products;
