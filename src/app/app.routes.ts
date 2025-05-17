import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentManagerPageComponent } from './pages/appointment-manager-page/appointment-manager-page.component';
import { PatientManagerPageComponent } from './pages/patient-manager-page/patient-manager-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PatientRootComponent } from './pages/patient-root/patient-root.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { AppointmentRootComponent } from './pages/appointment-root/appointment-root.component';
import { AddAppointmentComponent } from './pages/add-appointment/add-appointment.component';
import { ReportRootComponent } from './pages/report-root/report-root.component';
import { ReportManagerPageComponent } from './pages/report-manager-page/report-manager-page.component';
import { AddReportComponent } from './pages/add-report/add-report.component';

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
                component:AppointmentRootComponent,
                children:[
                    {
                        path:'add-appointment',
                        component:AddAppointmentComponent
                    },
                    {
                        path:'',
                        component:AppointmentManagerPageComponent
                    },
                    {
                        path:'view-all',
                        component:AppointmentManagerPageComponent
                    }
                ]
            },
            {
                path:'patient',
                component:PatientRootComponent,
                children:[
                    {
                        path:'',
                        component:PatientManagerPageComponent

                    },
                    {
                        path:'add-patient',
                        component:AddPatientComponent

                    },
                    {
                         path:'view-all',
                        component:PatientManagerPageComponent

                    }
                    
                    
                ]
            },
            {
                path:'medical-report',
                component:ReportRootComponent,
                children:[
                    {
                        path:'',
                        component:ReportManagerPageComponent
                    },
                    {
                        path:'view-all',
                        component:ReportManagerPageComponent
                    },
                    {
                        path:'add-medical-report',
                        component:AddReportComponent
                    }
                ]
            },
            {
                path:'dashboard-page',
                component:DashboardPageComponent
            }          
        ]
    }
];
