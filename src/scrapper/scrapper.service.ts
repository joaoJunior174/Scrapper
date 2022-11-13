import { Injectable } from '@nestjs/common';
import { InjectPage } from 'nest-puppeteer';
import type { Page } from 'puppeteer';

@Injectable()
export class ScrapperService {
  constructor(@InjectPage() private readonly page: Page) {}
  readonly pagina: string = 'https://www.piadas.com.br/?page=';

  async buscarTituloPagina(pagina: number): Promise<any> {
    await this.page.goto(this.pagina + pagina);
    const pageContent = this.page.evaluate(() =>
      Array.from(document.querySelectorAll('h2 a span')).map(
        (elem) => elem.textContent,
      ),
    );
    return pageContent;
  }
}
