import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TRComponent } from './tr.component';

describe('TRComponent', () => {
  let component: TRComponent;
  let fixture: ComponentFixture<TRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
