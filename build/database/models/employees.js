"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Employees extends sequelize_1.Model {
    static initModel(sequelize) {
        Employees.init({
            EmpID: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            EFirstName: {
                type: sequelize_1.DataTypes.STRING,
            },
            ELastName: {
                type: sequelize_1.DataTypes.STRING,
            },
            Address: {
                type: sequelize_1.DataTypes.STRING,
            },
            Age: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            D_Join: {
                type: sequelize_1.DataTypes.DATE,
            },
            Dept: {
                type: sequelize_1.DataTypes.STRING,
            },
            Salary: {
                type: sequelize_1.DataTypes.INTEGER,
            },
        }, {
            sequelize,
            underscored: false,
            tableName: 'Employees',
            timestamps: false,
        });
    }
}
exports.default = Employees;
