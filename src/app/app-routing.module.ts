import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ManagementComponent } from './management/management.component';
import { TasksComponent } from './tasks/tasks.component';
import { EmployeesComponent } from './employees/employees.component';
import { BoardsComponent } from './boards/boards.component';
import { TrackingComponent } from './tracking/tracking.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'registration',
		component: RegistrationComponent
	},
	{
		path: 'about/gallery',
		component: GalleryComponent
	},
	{
		path: 'about/gallery/image/:id',
		component: ImageComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent,
		canActivate: [LoginGuard],
		canActivateChild: [LoginGuard], 
    children: [
    	{
       	path: '',
       	component: ProfileComponent,
       	data: {
       		roles: ['admin', 'user']
     	  }
     	},
      {
      	path: 'tracking',
       	component: TrackingComponent,
       	data: {
       		roles: ['user']
       	}
      },
      {
      	path: 'statistics',
       	component: TrackingComponent,
       	data: {
       		roles: ['user']
       	}
      },
      {
       	path: 'management',
       	component: ManagementComponent,
       	data: {
       		roles: ['admin']
     	  }
     	},
     	{
       	path: 'tasks',
       	component: TasksComponent,
       	data: {
       		roles: ['admin']
     	  }
     	},
     	{
       	path: 'employees',
       	component: EmployeesComponent,
       	data: {
       		roles: ['admin']
     	  }
     	},
     	{
       	path: 'boards',
       	component: BoardsComponent,
       	data: {
       		roles: ['admin']
     	  }
     	}
    ]
	},
	{
		path: '**',
		component: NotfoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
