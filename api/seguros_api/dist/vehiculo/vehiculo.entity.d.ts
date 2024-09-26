import { Marca_vehiculo } from './vehiculo_marca.entity';
export declare class Vehiculo {
    id_vehiculo: number;
    numero_serie: string;
    marca_vehiculo: Marca_vehiculo[];
    modelo: number;
    colosar: string;
    placas: string;
    tipasaso: string;
    color: string;
    numero_cilindros: number;
    numero_activo_sap: string;
}
