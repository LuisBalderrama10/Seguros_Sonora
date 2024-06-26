import { FabricanteAeronaveServicio } from './fabricante.aeronave.service';
import { FabricanteAeronave } from './fabricante.aeronave.model';
export declare class FaeronvaeController {
    private readonly faeronaveServicio;
    constructor(faeronaveServicio: FabricanteAeronaveServicio);
    getAllProducts(): FabricanteAeronave[];
    getProductById(id: number): FabricanteAeronave | undefined;
    createProduct(product: FabricanteAeronave): FabricanteAeronave;
    updateProduct(id: number, updatedProduct: FabricanteAeronave): FabricanteAeronave | undefined;
    deleteProduct(id: number): void;
}
