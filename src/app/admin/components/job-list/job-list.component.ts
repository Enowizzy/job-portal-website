import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

interface IJob {
  id: number;
  pdf: any;
  image: any;
  company: string;
  message: string;
  position: string;
  location: string;
}
@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css'],
})
export class JobListComponent implements OnInit {
  jobs: IJob[] | any;
  job_list: any;
  imageDirectory: any = environment.PUBLIC_URL;
  constructor(private job: JobService, private toastr: ToastrService,) {}

  ngOnInit(): void {
    this.job_list = this.job.jobList();
    this.getJobList();
  }

  getJobList() {
    this.job.jobList().subscribe((res) => {
      this.jobs = res;
    });
  }

  deleteJob(id: number): void {
    this.job.deleteJobById(id).subscribe((res: any) => {
      this.getJobList();
      if (res.code == 1) {
        this.toastr.success('Job Deleted Successful!', 'Success');
      }else{
        this.toastr.error('Something wrong has happened', 'Error');
      }
    });
  }
}
