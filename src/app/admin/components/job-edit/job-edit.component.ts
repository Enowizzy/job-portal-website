import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  filedata: any;
  imagedata: any;
  postJob = 'post job';
  imageDirectory: any = environment.PUBLIC_URL;
  jobs = new Job();
  constructor(
    private route: ActivatedRoute,
    private job: JobService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

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
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('pdf', this.filedata);
    myFormData.append('image', this.imagedata);
    myFormData.append('data', JSON.stringify(this.jobs));
    // this.job.updateJobById(this.id,myFormData).subscribe((res:any) => {
    //   this.jobEditDetails();
    // })

    this.http
      .patch('http://127.0.0.1:8000/api/update-job/' + this.id, myFormData, {
        headers: headers,
      })
      .subscribe((data: any) => {
        console.log(myFormData);
      });
  }
}
