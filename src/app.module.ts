import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [UsersModule, GatewayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
