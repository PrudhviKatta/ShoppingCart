import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestbuyComponent } from './bestbuy.component';

describe('BestbuyComponent', () => {
  let component: BestbuyComponent;
  let fixture: ComponentFixture<BestbuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestbuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
