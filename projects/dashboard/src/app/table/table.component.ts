import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from 'projects/tabs/src/lib/IData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public title: string;
  @Input() public data: Array<IStudent>;
  @Output() public dataChange: EventEmitter<Array<IStudent>> = new EventEmitter<Array<IStudent>>();
  public model: IStudent = {};

  constructor() { }

  public del(id: number) {
    this.data = this.data.filter(c => c.id !== id);
    this.dataChange.emit(this.data);
  }

  public trackByFn(i, d) {
    return i;
  }

  public Add() {
    this.data.push(this.model);
    this.model = {};
  }

  public parseDate(dateString: string): Date {
    return dateString ? new Date(dateString) : null;
  }
}
