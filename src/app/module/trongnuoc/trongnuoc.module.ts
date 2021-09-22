import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrongnuocComponent } from './trongnuoc/trongnuoc.component';
import { RouterModule, Routes} from '@angular/router';
import { AddtrongnuocComponent } from './addtrongnuoc/addtrongnuoc.component';
import { EdittrongnuocComponent } from './edittrongnuoc/edittrongnuoc.component';
import { ListrongnuocComponent } from './listrongnuoc/listrongnuoc.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const appRouter: Routes=[

    
  {
    path:'',
    component: TrongnuocComponent,
   
    children:[
      {
        path:'',
        component: ListrongnuocComponent,
        
      },
      
      
      {
        path:':id/edit',
        component: EdittrongnuocComponent
      },
      {
        path:'add',
        component: AddtrongnuocComponent
      }
      

    ]
  }
  

]


@NgModule({
  declarations: [
    TrongnuocComponent,
    AddtrongnuocComponent,
    EdittrongnuocComponent,
    ListrongnuocComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRouter) 
  ]
})
export class TrongnuocModule { }
