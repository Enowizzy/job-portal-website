import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css'],
})
export class JobPostComponent implements OnInit {
  postJob = 'post job';
  position: string = '';
  company: string = '';
  location: string = '';
  message: string = '';
  job_link: string = '';
  job_nature: string = '';
  end_date: string = '';
  edu_exp: string = '';
  vacancy: string = '';
  job: Job = {
    position: '',
    company: '',
    location: '',
    message: '',
  };

  changeText() {
    this.postJob = 'Posting Job...';
  }

  ngOnInit(): void {
    this.getJobList();
  }
  filedata: any;
  imagedata: any;
  job_list: any;
  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }
  ImageEvent(e: any) {
    this.imagedata = e.target.files[0];
  }
  constructor(
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private jobs: JobService
  ) {}
  onSubmit(f: NgForm) {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('pdf', this.filedata);
      myFormData.append('image', this.imagedata);
      myFormData.append('position', this.position);
      myFormData.append('company', this.company);
      myFormData.append('location', this.location);
      myFormData.append('message', this.message);
      myFormData.append('job_link', this.job_link);
      myFormData.append('job_nature', this.job_nature);
      myFormData.append('end_date', this.end_date);
      myFormData.append('edu_exp', this.edu_exp);
      myFormData.append('vacancy', this.vacancy);
      this.http
        .post('http://127.0.0.1:8000/api/addJobs', myFormData, {
          headers: headers,
        })
        .subscribe((data: any) => {
          if (data.code == 1) {
            this.toastr.success('Job Posted Successful!', 'Success');
            this.getJobList();
            this.router.navigate(['/admin/job-list']);
          }
        });

      this.spinner.hide();
    }, 5000);
  }

  getJobList() {
    this.jobs.jobList().subscribe((res) => {
      this.job_list = res;
    });
  }
}
