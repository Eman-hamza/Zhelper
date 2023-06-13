import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboredHelperComponent } from './dashbored-helper/dashbored-helper.component';
import { AddProposalComponent } from './add-proposal/add-proposal.component';
import { DisplayJobComponent } from './display-job/display-job.component';
import { AddTestComponent } from './add-test/add-test.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { BeforeRegisterComponent } from './before-register/before-register.component';
import { HelperRegisterComponent } from './helper-register/helper-register.component';
import { patientOrHelperGuard } from './patient-or-helper.guard';
import { FormPatientComponent } from './form-patient/form-patient.component';
import { FormHelperComponent } from './form-helper/form-helper.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'header',canActivate:[AuthGuard],component:HeaderComponent},
  {path:'helper-dashbored',canActivate:[AuthGuard],component:DashboredHelperComponent},
  {path:'addproposal',canActivate:[AuthGuard,patientOrHelperGuard],component:AddProposalComponent},
  {path:'displayJob',canActivate:[AuthGuard],component:DisplayJobComponent},
  {path:'addTest',canActivate:[AuthGuard],component:AddTestComponent},
  {path:'HomePage',component:HomePageComponent},
  {path:'BeforeRegister',component:BeforeRegisterComponent},
  {path:'HelperRegister',component:HelperRegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'FormPatient',component:FormPatientComponent},
  {path:'FormHelper',component:FormHelperComponent},

  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
