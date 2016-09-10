import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BeltsComponent } from './belts/belts.component';
import { BeltsRoutes } from './belts/belts.routes';
import { SilabusRoutes } from './silabus/silabus.routes';

export const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'belts',
    component: BeltsComponent
  },
  BeltsRoutes[0],
  SilabusRoutes[0]
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
