import { Injectable } from '@nestjs/common';
import * as prixData from './prix.json';

@Injectable()
export class PrixService {
  getPrixData() {
    return prixData;
  }
}