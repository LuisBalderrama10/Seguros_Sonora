import { Aseguradora } from './aseguradoras.model';
export declare class AseguradoraServicio {
    private aseguradora;
    getAllProducts(): Aseguradora[];
    getProductById(id_aseguradora: number): Aseguradora | undefined;
    createProduct(aseguradora: Aseguradora): Aseguradora;
    updateProduct(id_aseguradora: number, updatedProduct: Aseguradora): Aseguradora | undefined;
    deleteProduct(numero_serie: number): void;
}
