import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "process";
import * as path from 'path';
import { Dependencia } from "./entities/dependencia.entity";
import { Accidente_escolares } from "./entities/accidentes_escolares.entity";
import { Aeronave_fabricante } from "./entities/aeronave_fabricante.entity";
import { Aeronave } from "./entities/aeronave.entity";
import { Aseguradora } from "./entities/aseguradora.entity";
import { Clientes } from "./entities/clientes.entity";
import { Inmueble } from "./entities/inmueble.entity";
import { Institucion } from "./entities/institucion.entity";
import { Poliza } from "./entities/poliza.entity";
import { Ramo_poliza } from "./entities/poliza.ramo.entity";
import { rol } from "./entities/rol.entity";
import { seg_rc_usa } from "./entities/seg_rc_usa.entity";
import { Seguros } from "./entities/seguros.entity";
import { Siniestro } from "./entities/siniestro.entity";
import { Tipo_inmueble } from "./entities/tipo_inmueble.entity";
import { Usuario } from "./entities/usuario.entity";
import { Vehiculo } from "./entities/vehiculo.entity";
import { Marca_vehiculo } from "./entities/vehiculo_marca.entity";
import { Tipo_vehiculo } from "./entities/vehiculo_tipo.entity";
import { Tipo_Siniestro } from "./entities/siniestro_tipo.entity";
import { Tipo_seguro } from "./entities/seguro_tipo.entity";

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'seguros_inst_db',
    entities: [Dependencia, Accidente_escolares, Aeronave_fabricante, Aeronave, Aseguradora, Clientes, Inmueble, Institucion, Poliza, Ramo_poliza, rol, seg_rc_usa, Seguros, Siniestro, Tipo_inmueble, Usuario, Vehiculo, Marca_vehiculo, Tipo_vehiculo, Tipo_Siniestro, Tipo_seguro],
    migrations: [path.join(__dirname, 'migrations', '**', '*.{ts,js}')],
    synchronize: false,
    //cache: {
      //  duration: 3000,
    //}
};

export const AppDataSource = new DataSource(dataSourceOptions);

export const initializeDataSource = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Data Source has been initialized!");
    } catch (err) {
        console.error("Error during Data Source initialization:", err);
    }
};