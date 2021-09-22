import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: number =0;

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

  checkLogin(){
      if(localStorage.getItem('users')){
         this.router.navigate(['trongnuoc']);
        console.log("dang nhap thanh cong")
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

get f() { return this.profileForm.controls; }

    onSubmit(){
      if((this.profileForm.value.usernames ==='admin') && (this.profileForm.value.passwords ==='admin') ){

        localStorage.setItem('users', JSON.stringify(this.profileForm.value.usernames));
       
       this.error =0;
       console.log("login thanh cong");
       this.router.navigate(['trongnuoc']);
      }
      else{
          this.error= 1;
          console.log(this.error)
      }
  
    }
}

