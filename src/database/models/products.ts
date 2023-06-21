import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attributes';

class Products extends Model implements ProductAttributes {
    public ProdID!: string;
    public ProdName!: string;
    public Base_Cost!: number;

    static initModel(sequelize: Sequelize): void {
        Products.init(
            {
                ProdID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                ProdName: {
                    type: DataTypes.STRING,
                },
                Base_Cost: {
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Products;
