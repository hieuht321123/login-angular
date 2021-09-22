import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrongnuocComponent } from './edittrongnuoc.component';

describe('EdittrongnuocComponent', () => {
  let component: EdittrongnuocComponent;
  let fixture: ComponentFixture<EdittrongnuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittrongnuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittrongnuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
