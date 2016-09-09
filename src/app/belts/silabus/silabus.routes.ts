import { provideRouter, RouterConfig } from '@angular/router';
import { LessonComponent } from '../lesson/lesson.component';

export const SilabusRoutes: RouterConfig = [
  { path: 'lesson/:id', component: LessonComponent}
]
