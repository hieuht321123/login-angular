import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  error: number =0;
check: boolean = false;
hideForm= true;
  constructor(private router: Router,
      private formBuider: FormBuilder
    ) {}


    
    profileForm = new FormGroup({
      usernames: new FormControl('', [Validators.required]),
      passwords: new FormControl('', [Validators.required, Validators.minLength(5)])
    });



  ngOnInit(): void {
  
    this.checkLogin();
  }

  get f() { return this.profileForm.controls; }

  onSubmit(){
    if((this.profileForm.value.usernames ==='admin') && (this.profileForm.value.passwords ==='admin') ){

      localStorage.setItem('users', JSON.stringify(this.profileForm.value.usernames));
     
     
     console.log("login thanh cong");
     this.check= true;
     this.error =0;
     this.router.navigate(['trongnuoc']);
     this.hideForm = false;
    }
    else{

        this.error= 1;
        console.log(this.error)
    }

  }
  checkLogin(){
    if(localStorage.getItem('users')){

      this.check= true;
      this.hideForm = false;
      this.router.navigate(['trongnuoc']);
      
      
    }
    else{
      this.router.navigate(['login']);
      this.check= false;
    }
    return this.check;
  }
  
  logout(){
    if(localStorage.getItem('users')){
      this.check= !this.check;
      this.hideForm = true;
      localStorage.removeItem('users');
      console.log(localStorage.getItem('users'));
      this.router.navigate(['login']);
    }
  }

//   loginForm(userName: string, password: string){
//     let user ={
//       userName: userName,
//       password: password

//     }
    
//     if(userName ==='admin' && password ==='admin'){
//       localStorage.setItem('users', JSON.stringify(user));
//       this.router.navigate(['']);
     
//     }
//     else{
//         this.error= 1;
//         console.log(this.error)
//     }

// }

}
