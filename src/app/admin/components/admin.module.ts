import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdminRoutingComponents,
  AdminRoutingModule,
} from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobPostComponent } from './job-post/job-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobEditComponent } from './job-edit/job-edit.component';
import { JobUpdateComponent } from './job-update/job-update.component';
import { JobDeleteComponent } from './job-delete/job-delete.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminRoutingComponents,
    JobPostComponent,
    JobListComponent,
    JobDetailsComponent,
    JobEditComponent,
    JobUpdateComponent,
    JobDeleteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AdminComponent],
})
export class AdminModule {}
