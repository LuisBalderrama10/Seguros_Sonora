import { DataSource, DataSourceOptions } from "typeorm";
import { config } from "process";

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'seguros_inst_db',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/migrations/**/*.{.ts,.js}'],
    synchronize: false,
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