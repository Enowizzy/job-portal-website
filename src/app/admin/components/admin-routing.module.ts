import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobUpdateComponent } from './job-update/job-update.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'job-post',
        component: JobPostComponent,
      },
      {
        path: 'job-list',
        component: JobListComponent,
      },
      {
        path: 'job-details/:id',
        component: JobDetailsComponent,
      },
      {
        path: 'job-edit/:id',
        component: JobEditComponent,
      },
      {
        path: 'job-update',
        component: JobUpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
export const AdminRoutingComponents = [
  AdminComponent,
  DashboardComponent,
  JobPostComponent,
  JobListComponent,

];
