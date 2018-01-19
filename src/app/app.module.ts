import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { ImageService } from './image.service';
import { PageService } from './page.service';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RegistrationComponent } from './registration/registration.component';
import { ManagementComponent } from './management/management.component';
import { TrackingComponent } from './tracking/tracking.component';
import { BoardsComponent } from './boards/boards.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SocialbarComponent } from './socialbar/socialbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { ImageFilterPipe } from './image-filter.pipe';
import { HttpModule } from '@angular/http';
import { LoginGuard } from './login.guard';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    RegistrationComponent,
    ManagementComponent,
    TrackingComponent,
    BoardsComponent,
    EmployeesComponent,
    TasksComponent,
    StatisticsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SocialbarComponent,
    NotfoundComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBp7sfbcnQm-55MpiwWGTz8WSLgxO0LMyE'
    })
  ],
  providers: [
    DataService,
    ImageService,
    ImageFilterPipe,
    PageService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
