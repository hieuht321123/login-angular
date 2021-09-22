import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrongnuocComponent } from './listrongnuoc.component';

describe('ListrongnuocComponent', () => {
  let component: ListrongnuocComponent;
  let fixture: ComponentFixture<ListrongnuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListrongnuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrongnuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
