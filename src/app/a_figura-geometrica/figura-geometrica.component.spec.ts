import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FiguraGeometricaComponent } from './figura-geometrica.component';

describe('FiguraGeometricaComponent', () => {
  let component: FiguraGeometricaComponent;
  let fixture: ComponentFixture<FiguraGeometricaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FiguraGeometricaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FiguraGeometricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
