import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentManagerPageComponent } from './pages/appointment-manager-page/appointment-manager-page.component';
import { PatientManagerPageComponent } from './pages/patient-manager-page/patient-manager-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginPageComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        children:[
            {
                path:'appointment',
                component:AppointmentManagerPageComponent
            },
            {
                path:'patient',
                component:PatientManagerPageComponent
            },
            {
                path:'dashboard-page',
                component:DashboardPageComponent
            }

        ]
    }
];
