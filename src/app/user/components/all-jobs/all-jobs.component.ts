import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IJob } from 'src/app/interfaces/job.interface';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css'],
})
export class AllJobsComponent implements OnInit {
  jobs: IJob[] = [];
  job_list: any;
  jobCats: any;
  searchText: string = '';
  imageDirectory: any = environment.PUBLIC_URL;
  getAllJobs: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    navText: [
      '<i class="fas fa-arrow-alt-circle-left"></i>',
      '<i class="fas fa-arrow-alt-circle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
    nav: true,
  };
  constructor(private job: JobService) {}

  ngOnInit(): void {
    this.job_list = this.job.jobList();
    this.getJobList();
    this.getJobCategories();
  }
  getJobList() {
    this.job.jobList().subscribe((res: IJob[]) => {
      this.jobs = res;
    });
  }
  getJobCategories() {
    this.job.jobCategories().subscribe((res) => {
      this.jobCats = res;
    });
  }
}
