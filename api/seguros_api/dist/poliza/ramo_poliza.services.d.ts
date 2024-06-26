import { RamoPoliza } from './ramo_poliza.model';
export declare class PolizaServicio {
    private ramospolizas;
    getAllProducts(): RamoPoliza[];
    getProductById(Id_ramo_poliza: number): RamoPoliza | undefined;
    createProduct(poliza: RamoPoliza): RamoPoliza;
    updateProduct(Id_ramo_poliza: number, updatedProduct: RamoPoliza): RamoPoliza | undefined;
    deleteProduct(Id_ramo_poliza: number): void;
}
