import { Component, OnInit } from '@angular/core';
import { BeltsService } from './shared/services/belts.service';
import { TopComponent } from '../top/top.component';

@Component({
  moduleId: module.id,
  selector: 'app-belts',
  templateUrl: 'belts.component.html',
  styleUrls: ['../shared/style.css', 'belts.component.css'],
  directives: [TopComponent],
  providers: [BeltsService]
})
export class BeltsComponent implements OnInit {
  belts = [];

  constructor(private beltsService: BeltsService) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.belts = this.beltsService.getBelts();
  }
}
