import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

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
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: IJob[] | any;
  job_list: any;
  job_images: any;
  imageDirectory:any =  environment.PUBLIC_URL;
  constructor(private job: JobService) { }

  ngOnInit(): void {
    this.job_list = this.job.jobList();
    this.getJobList();
  }

  getJobList(){
    this.job.jobList().subscribe((res) => {
      this.jobs = res;
    });
  }
}
