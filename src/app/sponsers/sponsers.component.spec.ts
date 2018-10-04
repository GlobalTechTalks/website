import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsersComponent } from './sponsers.component';

describe('SponsersComponent', () => {
  let component: SponsersComponent;
  let fixture: ComponentFixture<SponsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
