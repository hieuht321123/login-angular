import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuocteComponent } from './quocte.component';

describe('QuocteComponent', () => {
  let component: QuocteComponent;
  let fixture: ComponentFixture<QuocteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuocteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuocteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
