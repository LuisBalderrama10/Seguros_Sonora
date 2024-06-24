import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class ConnectionService {
  constructor(private connection: Connection) {
    this.connection
      .connect()
      .then(() => {
        console.log('Database connection established');
      })
      .catch((error) => {
        console.error('Error connecting to the database', error);
      });
  }
}