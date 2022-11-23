import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, UserRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './user/components/index/index.component';
import { LoaderComponent } from './user/components/loader/loader.component';
import { FooterComponent } from './user/components/footer/footer.component';
import { HeaderComponent } from './user/components/header/header.component';
import { JobListComponent } from './user/components/job-list/job-list.component';
import { AboutComponent } from './user/components/about/about.component';
import { SingleBlogComponent } from './user/components/single-blog/single-blog.component';
import { ElementsComponent } from './user/components/elements/elements.component';
import { JobDetailsComponent } from './user/components/job-details/job-details.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { BlogComponent } from './user/components/blog/blog.component';
import { RegisterComponent } from './user/components/register/register.component';
import { LoginComponent } from './user/components/login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatSelectModule} from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminModule } from './admin/components/admin.module';
import { PageNotFoundComponent } from './user/components/page-not-found/page-not-found.component';
import { AllJobsComponent } from './user/components/all-jobs/all-jobs.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserRoutingComponents,
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    JobListComponent,
    AboutComponent,
    SingleBlogComponent,
    ElementsComponent,
    JobDetailsComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    AllJobsComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
