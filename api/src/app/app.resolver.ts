import { Args, Int, Resolver, Query } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  async id(@Args('id', { type: () => Int }) id: number) {
    return this.appService.getId(id);
  }
}
