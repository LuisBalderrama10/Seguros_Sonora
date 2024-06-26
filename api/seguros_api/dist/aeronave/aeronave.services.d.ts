import { Aeronave } from './aeronave.model';
export declare class AeronaveServicio {
    private aeronaves;
    getAllProducts(): Aeronave[];
    getProductById(Id_aeronave: number): Aeronave | undefined;
    createProduct(vehiculo: Aeronave): Aeronave;
    updateProduct(Id_aeronave: number, updatedProduct: Aeronave): Aeronave | undefined;
    deleteProduct(Id_aeronave: number): void;
}
