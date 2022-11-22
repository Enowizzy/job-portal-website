import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.css'],
})
export class JobEditComponent implements OnInit {
  id: any;
  // jobs: any;
  postJob = 'post job';
  imageDirectory: any = environment.PUBLIC_URL;
  jobs = new Job();
  constructor(private route: ActivatedRoute, private job: JobService,  private fb: FormBuilder,) {}

  ngForm = this.fb.group({
    position: ['', [Validators.required, Validators.minLength(5)]],
    company: ['', [Validators.required, Validators.minLength(5)]],
    location: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.jobEditDetails();
  }

  changeText() {
    this.postJob = 'Posting Job...';
  }

  jobEditDetails() {
    this.job.viewJobById(this.id).subscribe((res: any) => {
      this.jobs = res;
    });
  }

  fileEvent(event: any) {}
  ImageEvent(event: any) {}
  onSubmit(f: NgForm) {
    console.log(this.jobs);
  }
}
