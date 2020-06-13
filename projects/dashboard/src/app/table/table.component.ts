import { Component, Input, OnInit } from '@angular/core';
import { IData, IStudent } from 'projects/tabs/src/lib/IData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public title: string;
  @Input() public data: Array<IStudent>;

  constructor() { }

  ngOnInit() { }

  public trackByFn(i, d) {
    return i;
  }
  public del(item: IStudent) {
    this.data.splice(this.data.findIndex(c => c.id === item.id), 1);
  }
  public edit(item: IData) {

  }
}
