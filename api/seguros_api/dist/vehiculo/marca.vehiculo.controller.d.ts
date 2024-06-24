import { MarcaVehiculoServicio } from './marca.vehiculo.services';
import { MarcaVehiculo } from './marca.vehiculo.model';
export declare class MarcaVehiculoController {
    private readonly marcavehiculoServicio;
    constructor(marcavehiculoServicio: MarcaVehiculoServicio);
    getAllProducts(): MarcaVehiculo[];
    getProductById(id: number): MarcaVehiculo | undefined;
    createProduct(product: MarcaVehiculo): MarcaVehiculo;
    updateProduct(id: number, updatedProduct: MarcaVehiculo): MarcaVehiculo | undefined;
    deleteProduct(id: number): void;
}
