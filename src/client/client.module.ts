import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { ClientDb } from './ClientDb.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClientController],
  providers: [ClientService, ClientDb, PrismaService],
  exports: [ClientService, ClientDb],
})
export class ClientModule {}
