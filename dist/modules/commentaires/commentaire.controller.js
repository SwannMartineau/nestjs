"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaireController = void 0;
const common_1 = require("@nestjs/common");
const commentaire_service_1 = require("./commentaire.service");
let CommentaireController = class CommentaireController {
    constructor(commentaireService) {
        this.commentaireService = commentaireService;
    }
    create(commentaire) {
        this.commentaireService.create(commentaire);
    }
    findAllByMangaId(mangaId) {
        return this.commentaireService.findAllByMangaId(parseInt(mangaId));
    }
    delete(id) {
        this.commentaireService.delete(parseInt(id));
    }
};
exports.CommentaireController = CommentaireController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':mangaId'),
    __param(0, (0, common_1.Param)('mangaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], CommentaireController.prototype, "findAllByMangaId", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CommentaireController.prototype, "delete", null);
exports.CommentaireController = CommentaireController = __decorate([
    (0, common_1.Controller)('commentaires'),
    __metadata("design:paramtypes", [commentaire_service_1.CommentaireService])
], CommentaireController);
//# sourceMappingURL=commentaire.controller.js.map