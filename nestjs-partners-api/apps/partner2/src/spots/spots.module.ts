import { SpotsCoreModule } from '@app/core/spots/spots-core.module';
import { Module } from '@nestjs/common';
import { SpotsController } from './spots.controller';

@Module({
  imports: [SpotsCoreModule],
  controllers: [SpotsController],
})
export class SpotsModule {}
