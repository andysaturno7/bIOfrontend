import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScanComponent } from './input-scan.component';

describe('InputScanComponent', () => {
  let component: InputScanComponent;
  let fixture: ComponentFixture<InputScanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputScanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
