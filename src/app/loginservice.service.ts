import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public userData:Array<object>=[{
    "username":"tarun@gmail.com",
    "password":"1234"
  },
  {
    "username":"nikhil@gmail.com",
    "password":"1234"
  },
  {
    "username":"aakash@gmail.com",
    "password":"1234"
  },
  {
    "username":"dhruv@gmail.com",
    "password":"1234"
  },
  {
    "username":"madhur@gmail.com",
    "password":"1234"
  }]
  private result:boolean;
  constructor() { }
  checkusernameandpassword(uname:string,pass:string):boolean{
this.result = this.userData.some((data:object) =>{
  if(data["username"]==uname && data["password"] == pass){
    localStorage.setItem('username',uname);
    return true;
  }else{
    return false;
  } 
})
return this.result;
  }
}
