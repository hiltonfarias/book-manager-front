import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/containers/login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'books',
    loadChildren: () => import('src/app/feature/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
