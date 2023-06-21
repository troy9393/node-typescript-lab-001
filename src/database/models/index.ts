import SequelizeConnection from '../configuration';
import Employees from './employees';
import Products from './products';
import QueryHandling from './queryHandling';

const sequelize = SequelizeConnection.getInstance();

Employees.initModel(sequelize);
Products.initModel(sequelize);
QueryHandling.initModel(sequelize);

export const db = {
    sequelize,
    Employees,
    Products,
    QueryHandling,
};
