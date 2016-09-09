import { Injectable } from '@angular/core';
import { Belt } from '../models/belt';
import { BELTS } from '../../mock-belts';
import { Silabus } from '../models/silabus';

@Injectable()
export class BeltsService {

  constructor() { }

  getBelts(): Belt[] {
    return BELTS;
  }

  getBelt(id): Belt {
    return Array.prototype.find((belt, index, BELTS) => {
      return belt.name === id;
    })
  }
}
