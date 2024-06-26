import { Aeronave } from './aeronave.model';
export declare class AeronaveController {
    private readonly aeronaveServicio;
    constructor(aeronaveServicio: AeronaveController);
    getAllProducts(): Aeronave[];
    getProductById(id: number): Aeronave | undefined;
    createProduct(product: Aeronave): Aeronave;
    updateProduct(id: number, updatedProduct: Aeronave): Aeronave | undefined;
    deleteProduct(id: number): void;
}
