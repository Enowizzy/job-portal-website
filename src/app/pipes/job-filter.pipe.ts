import { Pipe, PipeTransform } from '@angular/core';
import { IJob } from '../interfaces/job.interface';

@Pipe({
  name: 'jobFilter',
})
export class JobFilterPipe implements PipeTransform {
  transform(jobs: IJob[], searchText: string): IJob[] {
    if (!jobs || !searchText) {
      return jobs;
    }
    return jobs.filter(
      (job) =>
        job.position
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        job.message
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase()) ||
        job.location
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase())
    );
  }
}
