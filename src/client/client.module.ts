import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DbClientService } from './db_client.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService, PrismaService, DbClientService],
  exports: [ClientService, DbClientService],
})
export class ClientModule {}
