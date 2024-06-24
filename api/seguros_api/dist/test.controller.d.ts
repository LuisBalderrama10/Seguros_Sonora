import { Repository } from 'typeorm';
import { VehiculoEntity } from './vehiculo/vehiculo.entity';
export declare class TestController {
    private vehiculoRepository;
    constructor(vehiculoRepository: Repository<VehiculoEntity>);
    testConnection(): Promise<{
        message: string;
        error?: undefined;
    } | {
        message: string;
        error: any;
    }>;
}
