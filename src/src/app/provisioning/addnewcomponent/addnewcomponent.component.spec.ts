import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewcomponentComponent } from './addnewcomponent.component';

describe('AddnewcomponentComponent', () => {
  let component: AddnewcomponentComponent;
  let fixture: ComponentFixture<AddnewcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
