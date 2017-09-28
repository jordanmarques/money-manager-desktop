import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceRowTableComponent } from './balance-row-table.component';

describe('BalanceRowTableComponent', () => {
  let component: BalanceRowTableComponent;
  let fixture: ComponentFixture<BalanceRowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceRowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
