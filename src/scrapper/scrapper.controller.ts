import { Controller, Get, Injectable, Param } from '@nestjs/common';
import { InjectContext, InjectPage } from 'nest-puppeteer';
import type { Page } from 'puppeteer';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Get(':pagina')
  buscarTituloPagina(@Param('pagina') pagina: number): Promise<any> {
    return this.scrapperService.buscarTituloPagina(pagina);
  }
}
