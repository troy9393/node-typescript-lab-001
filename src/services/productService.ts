/* eslint-disable no-useless-catch */
import { db } from '../database/models';
import Products from '../database/models/products';

class ProductService {
    private static instance: ProductService;

    static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }

        return ProductService.instance;
    }

    findAll = async () => {
        const products: Products[] = await Products.findAll();
        return products;
    };

    findById = async (id: string) => {
        const upperId = id.toUpperCase();
        const existingProduct: Products | null = await Products.findByPk(
            upperId
        );
        return existingProduct;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain atleast one property');
            }
            const product = await Products.create({ ...object });
            return product;
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

        let existingProduct = await this.findById(upperId);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await Products.update(
                { ...object },
                {
                    where: { ProdID: upperId },
                }
            );

            existingProduct = await this.findById(upperId);
            return existingProduct;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        const upperId = id.toUpperCase();
        const existingProduct = await this.findById(upperId);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await existingProduct.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default ProductService;
