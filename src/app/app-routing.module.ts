import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PrincipalComponent } from './components/principal.component';
import { Error404Component } from './pages/error404/error404.component';

export const paths = {
  login : 'login',
  register: 'register',
  dashboard: 'dashboard'
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: paths.login },
  { path: paths.login,  component : LoginComponent },
  { path: paths.register, component: RegisterComponent },
  { path: paths.dashboard, component : PrincipalComponent},
  { path: '**',  component: Error404Component }
];

export const APPROUTES = RouterModule.forRoot(routes);
