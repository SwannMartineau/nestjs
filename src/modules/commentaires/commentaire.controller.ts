import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { Commentaire } from './commentaire.model';

@Controller('commentaires')
export class CommentaireController {
  constructor(private readonly commentaireService: CommentaireService) {}

  @Post()
  create(@Body() commentaire: Commentaire) {
    this.commentaireService.create(commentaire);
  }

  @Get(':mangaId')
  findAllByMangaId(@Param('mangaId') mangaId: string): Commentaire[] {
    return this.commentaireService.findAllByMangaId(parseInt(mangaId));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.commentaireService.delete(parseInt(id));
  }
}