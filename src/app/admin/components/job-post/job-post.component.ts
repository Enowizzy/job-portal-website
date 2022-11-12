import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Job } from 'src/app/models/job.model';;

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.css']
})
export class JobPostComponent implements OnInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  job = new Job();
  
  ngOnInit(): void {
  }
  filedata: any;
  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }
  constructor(private http: HttpClient) {}
  onSubmit(f: NgForm) {
    var myFormData = new FormData();
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    myFormData.append('pdf', this.filedata);
    myFormData.append('name', this.name);
    myFormData.append('email', this.email);
    myFormData.append('subject', this.subject);
    myFormData.append('message', this.message);
    this.http
      .post('http://127.0.0.1:8000/api/addJobs', myFormData, {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }

}
