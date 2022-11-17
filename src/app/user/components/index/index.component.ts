import { JobService } from './../../../services/job.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { IJob } from 'src/app/interfaces/job.interface';

interface IJob  {
  id: number,
  pdf: any,
  image: any,
  company: string,
  message: string,
  position: string,
  location: string,
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  jobs: IJob[] | any;
  // jobs: any;
  job_list: any;
  job_images: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResponse: any;
  indexOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  constructor(private job: JobService) {}

 
  ngOnInit(): void {
    this.job_list = this.job.jobList();
    this.getJobList();
  }

  getJobList(){
    this.job.jobList().subscribe((res) => {
      this.jobs = res;
      // console.log(this.jobs);
    });
  }
  getJobImageList(){
    this.job.jobImageList().subscribe((res) => {
      this.job_images = res;
      this.base64Data = this.retrieveResponse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      console.log(this.retrievedImage);
    });
  }

}
