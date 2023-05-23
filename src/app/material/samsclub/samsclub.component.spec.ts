import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsclubComponent } from './samsclub.component';

describe('SamsclubComponent', () => {
  let component: SamsclubComponent;
  let fixture: ComponentFixture<SamsclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsclubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamsclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
