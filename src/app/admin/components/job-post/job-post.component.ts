import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Job } from 'src/app/models/job.model';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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
  job: Job = {
    position: '',
    company: '',
    location: '',
    message: '',
  };

  changeText() {
    this.postJob = 'Posting Job...';
  }

  ngOnInit(): void {}
  filedata: any;
  imagedata: any;
  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }
  ImageEvent(e: any) {
    this.imagedata = e.target.files[0];
  }
  constructor(private http: HttpClient, private router: Router, private spinner: NgxSpinnerService) {}
  onSubmit(f: NgForm) {
    /** spinner starts on init */
    this.spinner.show()
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
    this.http
      .post('http://127.0.0.1:8000/api/addJobs', myFormData, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
      
      this.spinner.hide();
    }, 5000);
      this.router.navigate(['/admin/job-list']);
  }
}
