import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrongnuocComponent } from './trongnuoc.component';

describe('TrongnuocComponent', () => {
  let component: TrongnuocComponent;
  let fixture: ComponentFixture<TrongnuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrongnuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrongnuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
