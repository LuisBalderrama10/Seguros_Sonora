import { Module } from '@nestjs/common';
import { clienteController } from 'src/controllers/clientes.controller';
import { ClienteService } from 'src/services/clientes.service';

@Module({
    controllers: [clienteController],
    providers: [ClienteService],
  })
export class ClientesModule {}
