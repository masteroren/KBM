import { Belt } from './shared/models/belt';
import { Silabus } from './shared/models/silabus';

export const BELTS: Belt[] = [
      {
        id: 0,
        name: 'white-belt',
        class: 'white',
        silabus: {
          id: 0
        }
      },
      {
        id: 1,
        name: 'yellow-belt',
        class: 'yellow',
        silabus: Silabus
      },
      {
        id: 2,
        name: 'orange-belt',
        class: 'orange',
        silabus: Silabus
      },
      {
        id: 3,
        name: 'green-belt',
        class: 'green',
        silabus: Silabus
      },
      {
        id: 4,
        name: 'blue-belt',
        class: 'blue',
        silabus: Silabus
      },{
        id: 5,
        name: 'brown-belt',
        class: 'brown',
        silabus: Silabus
      },
      {
        id: 6,
        name: 'black-belt',
        class: 'black',
        silabus: Silabus
      }
]
