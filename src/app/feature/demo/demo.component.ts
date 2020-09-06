import { Component, OnInit } from '@angular/core';
import { ChartSeries } from '~app/feature/chart/chart';
import { DATA } from './data';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  public data: ChartSeries[] = DATA;

  constructor() { }

  ngOnInit(): void {

  }


}
