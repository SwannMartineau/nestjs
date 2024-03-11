import { PrixService } from './prix.service';
export declare class PrixController {
    private readonly prixService;
    constructor(prixService: PrixService);
    getPrixData(): {
        "Shaman King": {
            prix_unitaire: number;
        };
        "Soul Eater": {
            prix_unitaire: number;
        };
        "Jujustu Kaisen": {
            prix_unitaire: number;
        };
    };
}
