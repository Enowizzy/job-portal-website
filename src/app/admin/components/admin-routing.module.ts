import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobDeleteComponent } from './job-delete/job-delete.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobPostComponent } from './job-post/job-post.component';
import { JobUpdateComponent } from './job-update/job-update.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, title:'Admin | Home',
    children: [
      {
        path: '',
        component: DashboardComponent, title:'Admin | Dashboard'
      },
      {
        path: 'job-post',
        component: JobPostComponent, title:'Admin | Job Post'
      },
      {
        path: 'job-list',
        component: JobListComponent, title:'Admin | Job List'
      },
      {
        path: 'job-details/:id',
        component: JobDetailsComponent, title:'Admin | Job Details'
      },
      {
        path: 'job-edit/:id',
        component: JobEditComponent, title:'Admin | Job Edit'
      },
      {
        path: 'job-update/:id',
        component: JobUpdateComponent, title:'Admin | Job Update'
      },
      {
        path: 'job-delete/:id',
        component: JobDeleteComponent, title:'Admin | Job Delete'
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
  JobDeleteComponent
];
