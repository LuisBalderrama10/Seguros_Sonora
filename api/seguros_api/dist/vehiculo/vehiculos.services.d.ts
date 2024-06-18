import { Vehiculo } from './vehiculos.model';
export declare class VehiculoServicio {
    private vehiculos;
    getAllProducts(): Vehiculo[];
    getProductById(numero_serie: number): Vehiculo | undefined;
    createProduct(vehiculo: Vehiculo): Vehiculo;
    updateProduct(numero_serie: number, updatedProduct: Vehiculo): Vehiculo | undefined;
    deleteProduct(numero_serie: number): void;
}
