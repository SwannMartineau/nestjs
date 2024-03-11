import { CommentaireService } from './commentaire.service';
import { Commentaire } from './commentaire.model';
export declare class CommentaireController {
    private readonly commentaireService;
    constructor(commentaireService: CommentaireService);
    create(commentaire: Commentaire): void;
    findAllByMangaId(mangaId: string): Commentaire[];
    delete(id: string): void;
}
