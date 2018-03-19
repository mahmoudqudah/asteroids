import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MahmpudqudahComponent } from './mahmpudqudah.component';

describe('MahmpudqudahComponent', () => {
  let component: MahmpudqudahComponent;
  let fixture: ComponentFixture<MahmpudqudahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MahmpudqudahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MahmpudqudahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
