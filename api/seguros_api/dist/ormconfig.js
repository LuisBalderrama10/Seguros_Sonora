"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = void 0;
exports.ormConfig = {
    type: 'postgres',
    host: '192.168.90.209',
    port: 5432,
    username: 'seguros_inst_db',
    password: '1920siadmin',
    database: 'sonora_dig',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: 'all',
};
//# sourceMappingURL=ormconfig.js.map