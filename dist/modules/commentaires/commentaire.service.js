"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaireService = void 0;
const common_1 = require("@nestjs/common");
let CommentaireService = class CommentaireService {
    constructor() {
        this.commentaires = [];
    }
    create(commentaire) {
        commentaire.id = this.commentaires.length + 1;
        commentaire.date = new Date();
        if (!commentaire.mangaId) {
            commentaire.mangaId = 0;
        }
        this.commentaires.push(commentaire);
        console.log('Commentaire ajouté :', commentaire);
    }
    findAll() {
        return this.commentaires;
    }
    findAllByMangaId(mangaId) {
        return this.commentaires.filter((commentaire) => commentaire.mangaId === mangaId);
    }
    delete(id) {
        this.commentaires = this.commentaires.filter((commentaire) => commentaire.id !== id);
    }
};
exports.CommentaireService = CommentaireService;
exports.CommentaireService = CommentaireService = __decorate([
    (0, common_1.Injectable)()
], CommentaireService);
//# sourceMappingURL=commentaire.service.js.map