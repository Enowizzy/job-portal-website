import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './user/components/about/about.component';
import { BlogComponent } from './user/components/blog/blog.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { ElementsComponent } from './user/components/elements/elements.component';
import { IndexComponent } from './user/components/index/index.component';
import { JobDetailsComponent } from './user/components/job-details/job-details.component';
import { JobListComponent } from './user/components/job-list/job-list.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';
import { SingleBlogComponent } from './user/components/single-blog/single-blog.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-details', component: JobDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single-blog', component: SingleBlogComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
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
  JobListComponent,
  ContactComponent,
  ElementsComponent,
  JobDetailsComponent,
  SingleBlogComponent,
  RegisterComponent
];