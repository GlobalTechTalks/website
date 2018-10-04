import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShashankComponent } from './shashank.component';

describe('ShashankComponent', () => {
  let component: ShashankComponent;
  let fixture: ComponentFixture<ShashankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShashankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShashankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
