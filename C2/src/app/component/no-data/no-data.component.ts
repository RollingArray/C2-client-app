import { Component, OnInit, Input, Injector } from '@angular/core';
import { BaseViewComponent } from '../base/base-view.component';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.css']
})
export class NoDataComponent extends BaseViewComponent implements OnInit {

  @Input() text;
  @Input() basic = false;
  @Input() project = false;
  @Input() comment = false;
  @Input() filter = false;
  @Input() activity = false;
  @Input() goal = false;
  @Input() sprint = false;
  @Input() member = false;
  @Input() reviewer = false;

  constructor(
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
  }

}
