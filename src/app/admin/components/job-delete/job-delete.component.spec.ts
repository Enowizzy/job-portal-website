import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDeleteComponent } from './job-delete.component';

describe('JobDeleteComponent', () => {
  let component: JobDeleteComponent;
  let fixture: ComponentFixture<JobDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
