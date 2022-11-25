import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IJob } from 'src/app/interfaces/job.interface';
import { JobService } from 'src/app/services/job.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  imageDirectory:any =  environment.PUBLIC_URL;
  jobs: any;
  id: any;

  constructor(private route: ActivatedRoute,private job: JobService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.jobDetails();
  }

  jobDetails(){
    this.job.viewJobById(this.id).subscribe((res:any) => {
      this.jobs = res;
    });
  }
}
