import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-delete',
  templateUrl: './job-delete.component.html',
  styleUrls: ['./job-delete.component.css']
})
export class JobDeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private job: JobService) { }

  ngOnInit(): void {
  }
}
