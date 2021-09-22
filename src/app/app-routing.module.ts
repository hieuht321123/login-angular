import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './component/notfound/notfound.component';
const routes: Routes = [

 
  {
    path:'',
    redirectTo:'/trongnuoc',
    pathMatch:'full'

  },
  
  {
    path: 'tienich',
    loadChildren: () => import('./module/tienich/tienich.module').then(m => m.TienichModule),

  },
  {
    path: 'thuong',
    loadChildren: () => import('./module/thuong/thuong.module').then(m => m.ThuongModule),
   
  },
  {
    path: 'quocte',
    loadChildren: () => import('./module/quocte/quocte.module').then(m => m.QuocteModule),
 
  },
  
    
  {
    path: 'login',
    loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule),
  
  },
  {
    path: 'trongnuoc',
    loadChildren: () => import('./module/trongnuoc/trongnuoc.module').then(m => m.TrongnuocModule),

  },
  {
    path:'**',
    component: NotfoundComponent
  } 
  
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  }),
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
