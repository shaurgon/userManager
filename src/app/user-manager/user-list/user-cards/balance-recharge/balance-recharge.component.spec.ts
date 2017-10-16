import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceRechargeComponent } from './balance-recharge.component';

describe('BalanceRechargeComponent', () => {
  let component: BalanceRechargeComponent;
  let fixture: ComponentFixture<BalanceRechargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceRechargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
