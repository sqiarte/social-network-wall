import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, public userService: UserService, private snackbar : MatSnackBar, private router:Router) {}

  ngOnInit(): void {
    
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login(){
    this.userService.getUser(this.loginForm.value.email).then((res:any)=>{
      console.log(res);
      //check if the email is exist (user is exist), and password is matched
      if(res.length == 0){
        console.log("account does not exist")
        this.snackbar.open('Account does not exist', 'ok');
      } else {
        if (res[0].password === this.loginForm.value.password){
          console.log("matched password")
          this.snackbar.open('Login successful', 'ok');
          this.userService.user = res[0];
          localStorage.setItem('user', JSON.stringify(res[0]));
          this.router.navigate(['/posts']);
        } else{
          console.log("incorrect password")
          this.snackbar.open('Incorrect Password', 'ok');
        }
      }
    }).catch((err)=> {
      console.log(err);
    });
  }

}
