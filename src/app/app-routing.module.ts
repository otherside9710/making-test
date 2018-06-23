import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NofoundPageComponent } from './components/nofound-page/nofound-page.component';
import { SuccessPageComponent} from './components/success-page/success-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sing-up', component: RegisterComponent},
  {path: 'task', component: SuccessPageComponent, canActivate: [AuthGuard]},
  {path: '**', component: NofoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
