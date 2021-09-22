import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuocteComponent } from './quocte/quocte.component';
import { RouterModule, Routes } from '@angular/router';

const appRouter: Routes=[

  {
    path:'',
    component: QuocteComponent
  }
  
 

]


@NgModule({
  declarations: [
    QuocteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRouter)
  ]
})
export class QuocteModule { }
