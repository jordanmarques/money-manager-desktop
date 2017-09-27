import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyPageComponent } from './monthly-page.component';

describe('MonthlyPageComponent', () => {
  let component: MonthlyPageComponent;
  let fixture: ComponentFixture<MonthlyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
