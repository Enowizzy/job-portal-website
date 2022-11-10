import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {}

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
    myFormData.append('image', this.filedata);
    this.http
      .post(
        'http://localhost/blog/public/api/sample-restful-apis',
        myFormData,
        {
          headers: headers,
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
