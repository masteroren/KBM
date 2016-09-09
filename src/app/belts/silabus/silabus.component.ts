import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { TopComponent } from '../../top/top.component';
import { BeltsService } from '../shared/services/belts.service';
import { Belt } from '../shared/models/belt';

@Component({
  moduleId: module.id,
  selector: 'app-silabus',
  templateUrl: 'silabus.component.html',
  styleUrls: ['silabus.component.css'],
  directives: [ROUTER_DIRECTIVES, TopComponent],
  providers: [BeltsService]
})
export class SilabusComponent implements OnInit {
  private sub: any;
  private belt: Belt;
  private id: string;

  constructor( private beltsService: BeltsService,  private route: ActivatedRoute ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.id = params['id'];
      this.belt = this.beltsService.getBelt(this.id);
    })
  }

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }

}
