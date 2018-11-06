import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPickListComponent } from './ngx-pick-list.component';

describe('NgxPickListComponent', () => {
  let component: NgxPickListComponent;
  let fixture: ComponentFixture<NgxPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
