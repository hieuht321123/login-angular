import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThuongComponent } from './thuong/thuong.component';
import { RouterModule, Routes } from '@angular/router';

const appRouter: Routes=[

    {
      path:'',
      component: ThuongComponent
    }
    
   

]




@NgModule({
  declarations: [
    ThuongComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter)
  ]
})
export class ThuongModule { }
