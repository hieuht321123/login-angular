import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtrongnuocComponent } from './addtrongnuoc.component';

describe('AddtrongnuocComponent', () => {
  let component: AddtrongnuocComponent;
  let fixture: ComponentFixture<AddtrongnuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtrongnuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtrongnuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
