/* eslint-disable no-useless-catch */
import { db } from '../database/models';
import Employees from '../database/models/employees';

class EmployeeService {
    private static instance: EmployeeService;

    static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService();
        }

        return EmployeeService.instance;
    }

    findAll = async () => {
        const employees: Employees[] = await Employees.findAll();
        return employees;
    };

    findById = async (id: string) => {
        const upperId = id.toUpperCase();
        const existingEmployee: Employees | null = await Employees.findByPk(
            upperId
        );
        return existingEmployee;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain atleast one property');
            }
            const employee = await Employees.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };

    update = async (id: string, object: any) => {
        const upperId = id.toUpperCase();
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingEmployee = await this.findById(upperId);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await Employees.update(
                { ...object },
                {
                    where: { EmpID: upperId },
                }
            );

            existingEmployee = await this.findById(upperId);
            return existingEmployee;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        const upperId = id.toUpperCase();
        const existingEmployee = await this.findById(upperId);
        if (!existingEmployee) {
            throw new Error('employee_not_found');
        }

        try {
            await existingEmployee.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default EmployeeService;
