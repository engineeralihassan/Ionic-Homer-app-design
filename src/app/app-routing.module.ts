import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
  path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
},
{
  path: 'send-code-again',
  loadChildren: () => import('./again-pass/again-pass.module').then(m => m.AgainPassPageModule)
},
{
  path: 'forget-passward',
  loadChildren: () => import('./forget-pass/forget-pass.module').then(m => m.ForgetPassPageModule)
},
{
  path: 'signup',
  loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
},
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'forget-pass',
    loadChildren: () => import('./forget-pass/forget-pass.module').then( m => m.ForgetPassPageModule)
  },
  {
    path: 'again-pass',
    loadChildren: () => import('./again-pass/again-pass.module').then( m => m.AgainPassPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
