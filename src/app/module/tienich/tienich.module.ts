import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TienichComponent } from './tienich.component';
import { RouterModule, Routes } from '@angular/router';


const appRouter: Routes=[

 
    {
      path:'',
      component: TienichComponent
    }
]

@NgModule({
  declarations: [
    TienichComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter)
  ]
})
export class TienichModule { }
