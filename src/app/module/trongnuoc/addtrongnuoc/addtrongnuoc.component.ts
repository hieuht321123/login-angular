import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Buukien } from 'src/app/model/buugui';
import { TrongnuocService } from 'src/app/service/trongnuoc.service';

@Component({
  selector: 'app-addtrongnuoc',
  templateUrl: './addtrongnuoc.component.html',
  styleUrls: ['./addtrongnuoc.component.css']
})
export class AddtrongnuocComponent implements OnInit {

  tutorial: Buukien = {
    name: '',
    city: '',
    price: 0
  };
  constructor(private router: Router,
    private formBuider: FormBuilder,
    private buuKienService: TrongnuocService
    
    ) {}
  ngOnInit() {
   
  }


  
  registerForm = new FormGroup({
    names: new FormControl('', [Validators.required]),
    citys: new FormControl('', [Validators.required]),
    prices: new FormControl('', [Validators.required])
  });


  get f() { return this.registerForm.controls; }


  addBuuKien(){
    
      const data = {
        name: this.tutorial.name,
        city: this.tutorial.city,
        price: this.tutorial.price
      };
  
      this.buuKienService.AddBuuKien(data).subscribe(data =>{
        if(data && data.id){
          this.router.navigate(['trongnuoc']);
  
        }
      })
  
  }


  onSubmit(){
    this.addBuuKien();
  }

}
