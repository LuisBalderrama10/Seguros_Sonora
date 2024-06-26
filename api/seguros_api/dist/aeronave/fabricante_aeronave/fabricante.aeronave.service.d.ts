import { FabricanteAeronave } from './fabricante.aeronave.model';
export declare class FabricanteAeronaveServicio {
    private fabricantesAeronaves;
    getAllProducts(): FabricanteAeronave[];
    getProductById(id_fabricante: number): FabricanteAeronave | undefined;
    createProduct(fabricanteaeronave: FabricanteAeronave): FabricanteAeronave;
    updateProduct(id_fabricante: number, updatedProduct: FabricanteAeronave): FabricanteAeronave | undefined;
    deleteProduct(id_fabricante: number): void;
}
