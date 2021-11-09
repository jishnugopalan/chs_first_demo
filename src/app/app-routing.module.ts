import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'inside',
    loadChildren: () => import('./pages/inside/inside.module').then( m => m.InsidePageModule),
   canActivate: [AuthGuardService]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then( m => m.DemoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'workeraccout',
    loadChildren: () => import('./users/workeraccout/workeraccout.module').then( m => m.WorkeraccoutPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'addworker',
    loadChildren: () => import('./admin/addworker/addworker.module').then( m => m.AddworkerPageModule)
  },
  {
    path: 'addcategory',
    loadChildren: () => import('./admin/addcategory/addcategory.module').then( m => m.AddcategoryPageModule)
  },
  {
    path: 'viewworkers',
    loadChildren: () => import('./admin/viewworkers/viewworkers.module').then( m => m.ViewworkersPageModule)
  },
  {
    path: 'approveworkers',
    loadChildren: () => import('./admin/approveworkers/approveworkers.module').then( m => m.ApproveworkersPageModule)
  },
  {
    path: 'joblist',
    loadChildren: () => import('./users/joblist/joblist.module').then( m => m.JoblistPageModule)
  },
  {
    path: 'workerslist',
    loadChildren: () => import('./users/workerslist/workerslist.module').then( m => m.WorkerslistPageModule)
  },
  {
    path: 'bookworker',
    loadChildren: () => import('./users/bookworker/bookworker.module').then( m => m.BookworkerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
