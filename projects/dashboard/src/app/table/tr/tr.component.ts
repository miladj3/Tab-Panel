import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IStudent } from 'projects/tabs/src/lib/IData';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-tr]',
  templateUrl: './tr.component.html',
  styleUrls: ['./tr.component.scss']
})
export class TRComponent implements OnInit {
  @Input() public index: number;
  @Input() public model: IStudent;
  @Output() public modelChange: EventEmitter<IStudent> = new EventEmitter<IStudent>();
  @Output() public delete: EventEmitter<number> = new EventEmitter<number>();

  public isEditMode: boolean = false;
  public birthday: string;

  constructor() { }
  ngOnInit(): void {
    this.birthday = this.model.birthday.toISOString().split('T')[0];
  }
  public del(id: number) {
    this.delete.emit(id);
  }
  public edit() {
    this.isEditMode = true;
  }

  public save() {
    this.modelChange.emit(this.model);
    this.isEditMode = false;
  }
  public parseDate(dateString: string): Date {
    return dateString ? new Date(dateString) : null;
  }
}
