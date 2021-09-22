import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TienichComponent } from './tienich.component';

describe('TienichComponent', () => {
  let component: TienichComponent;
  let fixture: ComponentFixture<TienichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TienichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TienichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
