import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {
  jobs: any;
  job_list: any;
  jobCats: any;
  imageDirectory:any =  environment.PUBLIC_URL;
  getAllJobs: OwlOptions = {
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
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  constructor(private job: JobService) { }

  ngOnInit(): void {
    this.job_list = this.job.jobList();
    this.getJobList();
    this.getJobCategories();
  }
  getJobList() {
    this.job.jobList().subscribe((res) => {
      this.jobs = res;
    });
  }
  getJobCategories() {
    this.job.jobCategories().subscribe((res) => {
      this.jobCats = res;
    });
  }

}
