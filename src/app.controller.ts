import { Controller, Get, Res, Render } from '@nestjs/common';
import { CommentaireService } from './modules/commentaires/commentaire.service';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  // constructor(private readonly commentaireService: CommentaireService) {}

  @Get()
  @Render('index.hbs')
  async root() {
    // const commentaires = await this.commentaireService.findAll();
    // return { commentaires };
  }
}
