import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Buukien } from 'src/app/model/buugui';
import { TrongnuocService } from 'src/app/service/trongnuoc.service';

@Component({
  selector: 'app-listrongnuoc',
  templateUrl: './listrongnuoc.component.html',
  styleUrls: ['./listrongnuoc.component.css']
})
export class ListrongnuocComponent implements OnInit, OnDestroy {
  searchText ="";
  buuKiens: Buukien[] =[];
  subction ?: Subscription;
  constructor(private trongNuocService: TrongnuocService) { }

  ngOnInit(): void {
    this.getAllBuuKien();
  }

  getAllBuuKien(){
    this.subction = this.trongNuocService.getAllBuuKien().subscribe((data: Buukien[])=>{
      this.buuKiens = data;
      console.log(this.buuKiens);
    })
  }
  onDeleteBuuKien(id: any){
    if(window.confirm('Bạn có chắc chắn muốn xóa bưu kiện ?')){
      this.subction= this.trongNuocService.deleteBuuKien(id).subscribe(data =>{
        this.loadAll();
      })
    
    }}
       
   
  


  loadAll(){
    this.trongNuocService.getAllBuuKien().subscribe(data =>{
      this.buuKiens = data;
    })
  }


  // search(){
  //   this.buuKiens = this.buuKiens.filter(data =>{

  //     return data.name?.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      
  //   })
  // }

  ngOnDestroy(){
    if(this.subction){
      this.subction.unsubscribe();
    }
  }
}