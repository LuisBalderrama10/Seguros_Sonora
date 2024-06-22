import { AseguradoraServicio } from './aseguradoras.services';
import { Aseguradora } from './aseguradoras.model';
export declare class AseguradoraController {
    private readonly aseguradoraServicio;
    constructor(aseguradoraServicio: AseguradoraServicio);
    getAllProducts(): Aseguradora[];
    getProductById(id: number): Aseguradora | undefined;
    createProduct(product: Aseguradora): Aseguradora;
    updateProduct(id: number, updatedProduct: Aseguradora): Aseguradora | undefined;
    deleteProduct(id: number): void;
}
