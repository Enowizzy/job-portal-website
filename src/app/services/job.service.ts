import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJob } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private API_URL = environment.API_URL;

  constructor(private _http: HttpClient) { }

  jobList(): Observable<IJob> {
    return this._http.get<IJob>(this.API_URL + 'job-list');
  }

}
