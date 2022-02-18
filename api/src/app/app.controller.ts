import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  async getHello() {
    const cacheData = await this.cacheManager.get<string | undefined>('hello');

    if (cacheData) {
      return {
        data: cacheData,
        source: 'redis cache',
      };
    }

    const data = await this.appService.getHello();

    await this.cacheManager.set('hello', data);

    return {
      data,
      source: 'service',
    };
  }
}
