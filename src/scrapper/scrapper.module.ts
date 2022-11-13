import { Module } from '@nestjs/common';
import { PuppeteerModule } from 'nest-puppeteer';
import { ScrapperController } from './scrapper.controller';
import { ScrapperService } from './scrapper.service';

@Module({
  imports: [PuppeteerModule.forRoot({ pipe: true })],
  controllers: [ScrapperController],
  providers: [ScrapperService],
})
export class ScrapperModule {}
