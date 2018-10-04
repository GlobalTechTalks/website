import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomMeetingsComponent } from './upcom-meetings.component';

describe('UpcomMeetingsComponent', () => {
  let component: UpcomMeetingsComponent;
  let fixture: ComponentFixture<UpcomMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
