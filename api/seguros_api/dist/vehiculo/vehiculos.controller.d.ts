import { VehiculoServicio } from './vehiculos.services';
import { Vehiculo } from './vehiculos.model';
export declare class VehiculoController {
    private readonly vehiculoServicio;
    constructor(vehiculoServicio: VehiculoServicio);
    getAllProducts(): Vehiculo[];
    getProductById(id: number): Vehiculo | undefined;
    createProduct(product: Vehiculo): Vehiculo;
    updateProduct(id: number, updatedProduct: Vehiculo): Vehiculo | undefined;
    deleteProduct(id: number): void;
}
