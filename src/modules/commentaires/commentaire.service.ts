import { Injectable } from '@nestjs/common';
import { Commentaire } from './commentaire.model';

@Injectable()
export class CommentaireService {
  private commentaires: Commentaire[] = [];

  create(commentaire: Commentaire) {
    commentaire.id = this.commentaires.length + 1;
    commentaire.date = new Date();
    if (!commentaire.mangaId) {
      commentaire.mangaId = 0;
    }
    this.commentaires.push(commentaire);
    console.log('Commentaire ajouté :', commentaire);
  }

  findAll(): Commentaire[] {
    return this.commentaires;
  }

  findAllByMangaId(mangaId: number): Commentaire[] {
    return this.commentaires.filter((commentaire) => commentaire.mangaId === mangaId);
  }

  delete(id: number) {
    this.commentaires = this.commentaires.filter((commentaire) => commentaire.id !== id);
  }
}