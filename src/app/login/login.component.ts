import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private uname:string;
  private pass:string;
  public submitted:boolean;
  public loginForm: FormGroup;
  constructor(private loginservice: LoginserviceService, private routes: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }
  check():void{
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
  } 
    let output = this.loginservice.checkusernameandpassword(this.uname, this.pass);
    if(output == true){
      this.routes.navigate(['/home']);
    }else{
      alert('Authentication Failed');
    }
  }

}
