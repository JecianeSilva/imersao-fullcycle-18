import { SpotsCoreModule } from '@app/core/spots/spots-core.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SpotsCoreModule],
})
export class SpotsModule {}
