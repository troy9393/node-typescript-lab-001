import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeeAttributes } from '../attributes';

class Employees extends Model implements EmployeeAttributes {
    public EmpID!: string;
    public EFirstName!: string;
    public ELastName!: string;
    public Address!: string;
    public Age!: number;
    public D_Join!: Date;
    public Dept!: string;
    public Salary!: number;

    static initModel(sequelize: Sequelize): void {
        Employees.init(
            {
                EmpID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                EFirstName: {
                    type: DataTypes.STRING,
                },
                ELastName: {
                    type: DataTypes.STRING,
                },
                Address: {
                    type: DataTypes.STRING,
                },
                Age: {
                    type: DataTypes.INTEGER,
                },
                D_Join: {
                    type: DataTypes.DATE,
                },
                Dept: {
                    type: DataTypes.STRING,
                },
                Salary: {
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employees;
