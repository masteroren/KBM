import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['shared/style.css', 'app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'app works!';
}
