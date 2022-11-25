import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './user/components/about/about.component';
import { AllJobsComponent } from './user/components/all-jobs/all-jobs.component';
import { BlogComponent } from './user/components/blog/blog.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { ElementsComponent } from './user/components/elements/elements.component';
import { IndexComponent } from './user/components/index/index.component';
import { JobDetailsComponent } from './user/components/job-details/job-details.component';
import { JobListComponent } from './user/components/job-list/job-list.component';
import { LoginComponent } from './user/components/login/login.component';
import { PageNotFoundComponent } from './user/components/page-not-found/page-not-found.component';
import { RegisterComponent } from './user/components/register/register.component';
import { SingleBlogComponent } from './user/components/single-blog/single-blog.component';

const routes: Routes = [
  { path: '', component: IndexComponent, title:'Welcome | Job Portal Website' },
  { path: 'job-list', component: JobListComponent, title:'Job List' },
  { path: 'job-details/:id', component: JobDetailsComponent, title:'Job Details' },
  { path: 'jobs', component: AllJobsComponent, title:'Job List' },
  { path: 'blog', component: BlogComponent, title:'Job List' },
  { path: 'single-blog', component: SingleBlogComponent, title:'Job List' },
  { path: 'elements', component: ElementsComponent, title:'Elements' },
  { path: 'about', component: AboutComponent, title:'About' },
  { path: 'contact', component: ContactComponent, title:'Contact' },
  { path: 'register', component: RegisterComponent, title:'Register' },
  { path: 'login', component: LoginComponent, title:'Login' },
  { path: '**', component: PageNotFoundComponent, title:'404 page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const UserRoutingComponents = [
  BlogComponent,
  IndexComponent,
  AboutComponent,
  LoginComponent,
  AllJobsComponent,
  JobListComponent,
  ContactComponent,
  ElementsComponent,
  JobDetailsComponent,
  SingleBlogComponent,
  RegisterComponent,
  PageNotFoundComponent
];