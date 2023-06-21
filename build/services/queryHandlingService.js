"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-useless-catch */
const queryHandling_1 = __importDefault(require("../database/models/queryHandling"));
class QueryHandlingService {
    constructor() {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const queryHandling = yield queryHandling_1.default.findAll();
            return queryHandling;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const upperId = id.toUpperCase();
            const existingQueryHandling = yield queryHandling_1.default.findByPk(upperId);
            return existingQueryHandling;
        });
        this.save = (object) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!object && Object.keys(object.length == 0)) {
                    throw new Error('Object must contain atleast one property');
                }
                const queryHandling = yield queryHandling_1.default.create(Object.assign({}, object));
                return queryHandling;
            }
            catch (err) {
                throw err;
            }
        });
        this.update = (id, object) => __awaiter(this, void 0, void 0, function* () {
            const upperId = id.toUpperCase();
            if (!object && Object.keys(object).length == 0) {
                throw new Error('Object to be updated must contain at least one property.');
            }
            let existingQueryHandling = yield this.findById(upperId);
            if (!existingQueryHandling) {
                throw new Error('query_handling_not_found');
            }
            try {
                yield queryHandling_1.default.update(Object.assign({}, object), {
                    where: { QID: upperId },
                });
                existingQueryHandling = yield this.findById(upperId);
                return existingQueryHandling;
            }
            catch (err) {
                throw err;
            }
        });
        this.deleteByPrimaryKey = (id) => __awaiter(this, void 0, void 0, function* () {
            const upperId = id.toUpperCase();
            const existingQueryHandling = yield this.findById(upperId);
            if (!existingQueryHandling) {
                throw new Error('query_handling_not_found');
            }
            try {
                yield existingQueryHandling.destroy();
            }
            catch (err) {
                throw err;
            }
        });
    }
    static getInstance() {
        if (!QueryHandlingService.instance) {
            QueryHandlingService.instance = new QueryHandlingService();
        }
        return QueryHandlingService.instance;
    }
}
exports.default = QueryHandlingService;
