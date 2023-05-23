import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostcoComponent } from './costco.component';

describe('CostcoComponent', () => {
  let component: CostcoComponent;
  let fixture: ComponentFixture<CostcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
