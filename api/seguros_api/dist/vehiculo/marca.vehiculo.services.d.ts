import { MarcaVehiculo } from './marca.vehiculo.model';
export declare class MarcaVehiculoServicio {
    private marcavehiculos;
    getAllProducts(): MarcaVehiculo[];
    getProductById(Id_marca: number): MarcaVehiculo | undefined;
    createProduct(marcavehiculo: MarcaVehiculo): MarcaVehiculo;
    updateProduct(Id_marca: number, updatedProduct: MarcaVehiculo): MarcaVehiculo | undefined;
    deleteProduct(Id_marca: number): void;
}
