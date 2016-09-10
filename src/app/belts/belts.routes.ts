import { provideRouter, RouterConfig } from '@angular/router';
import { SilabusComponent } from '../silabus/silabus.component';

export const BeltsRoutes: RouterConfig = [
  { path: 'silabus/:id', component: SilabusComponent}
]
