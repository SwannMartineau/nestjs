
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { PrixModule } from './modules/prix/prix.module';
import { CommentaireModule } from './modules/commentaires/commentaire.module';
import { CommentaireService } from './modules/commentaires/commentaire.service';


@Module({
  imports: [PrixModule,CommentaireModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
