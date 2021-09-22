import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Buukien } from 'src/app/model/buugui';
import { TrongnuocService } from 'src/app/service/trongnuoc.service';

@Component({
  selector: 'app-edittrongnuoc',
  templateUrl: './edittrongnuoc.component.html',
  styleUrls: ['./edittrongnuoc.component.css']
})
export class EdittrongnuocComponent implements OnInit {
  public buuKien :any;
  public subcription ?: Subscription;
  public subcriptionParams ?: Subscription;
  constructor(
    public productService:TrongnuocService,
    public routerService: Router,
    public activateRouterService: ActivatedRoute

  ) { }


  ngOnInit(): void {
    this.buuKien= new Buukien();
    this.loadData();
  }

  loadData(){
    this.activateRouterService.params.subscribe((data: Params) =>{
     let id= data['id'];
     this.subcription = this.productService.getBuuKienById(id).subscribe((courses: Buukien) =>{
      this.buuKien= courses;
     });
    });
  }

  editProduct(){
      this.subcription = this.productService.updateBuuKien(this.buuKien).subscribe((data:Buukien) =>{
        this.routerService.navigate(['trongnuoc']);
      })

  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
    if(this.subcriptionParams){
      this.subcriptionParams.unsubscribe();
    }
  }
}
