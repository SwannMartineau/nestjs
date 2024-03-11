import { Commentaire } from './commentaire.model';
export declare class CommentaireService {
    private commentaires;
    create(commentaire: Commentaire): void;
    findAll(): Commentaire[];
    findAllByMangaId(mangaId: number): Commentaire[];
    delete(id: number): void;
}
