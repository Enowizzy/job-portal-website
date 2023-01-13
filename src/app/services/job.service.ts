import { HttpClient, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IJob } from '../interfaces/job.interface';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private API_URL = environment.API_URL;

  constructor(private _http: HttpClient) {}

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => error);
  }
  
  jobList(): Observable<IJob> {
    return this._http.get<IJob>(this.API_URL + 'job-list').pipe(catchError(this.handleError));
  }
  latestJobList(): Observable<IJob> {
    return this._http.get<IJob>(this.API_URL + 'latest-list');
  }
  jobCategories(): Observable<any> {
    return this._http.get(this.API_URL + 'job-categories');
  }
  viewJobById(id: number): Observable<IJob[]> {
    return this._http.get<IJob[]>(this.API_URL + 'view-job/' + id);
  }
  editJobById(id: number) {
    return this._http.get(this.API_URL + 'edit-job/' + id);
  }
  updateJobById(id: number, data:any) {
    return this._http.patch(this.API_URL + 'update-job/' + id,data);
  }
  deleteJobById(id: number) {
    return this._http.delete(this.API_URL + 'delete-job/' + id);
  }
}
