import { Injectable } from '@angular/core';
import { Belt } from '../../shared/models/belt';
import { BELTS } from '../../shared/mock-belts';

@Injectable()
export class BeltsService {

  constructor() { }

  getBelts(): Belt[] {
    return BELTS;
  }

  getBelt(id: string): Belt {
    return BELTS.find((belt) => {
      return belt.name === id;
    })
  }
}
