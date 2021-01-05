import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public stateList: Array<string>;
  public districtList: Array<string>;
  public bankList: Array<string>;
  public state:string;
  public bank:string;
  public branch:string;
  public ifsc:string;
  public district:string;
  public myform:FormGroup;
  public displayList:Array<object>;
  public showRequired: object
 
  constructor() { }

  ngOnInit() {
    this.stateList=['Delhi','Kolkata','Mp', 'Bihar','Uttar pardesh'];
    this.districtList =['North','South','East', 'West'];
    this.bankList=['HDFC','ICICI','Canara', 'PNB'];
    this.showRequired={
      "state": false,
      "district": false,
      "branch": false,
      "bank": false,
      "ifsc": false
    },
    this.displayList=[{state:"Delhi",district:"west",branch:"test",bank:"HDFC",ifsc:"1241341"}]
    this.myform= new FormGroup({
      state: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      branch: new FormControl('', [Validators.required]),
      bank: new FormControl('', [Validators.required]),
      ifsc: new FormControl('', [Validators.required])
    })
  }

  public addBranch():void{
    // this.state = document.getElementById("state").;
     let check=this.myform.value;
    
    for (let [key, value] of Object.entries(check)) {
     if(value == ""){
      this.showRequired[key] = true;
     }else{
      this.showRequired[key] = false;
     }
  }
    if(this.myform.valid){
    console.log(this.myform.value);
   
    this.displayList.push(this.myform.value);
    if(JSON.parse(localStorage.getItem('usersData'))!=null){
      let data =JSON.parse(localStorage.getItem('usersData'));
      localStorage.setItem("usersData",JSON.stringify(data.push(this.displayList)));
    }else{
    localStorage.setItem("usersData",JSON.stringify(this.displayList))
    }
    }
  }
  public deleteBranch(i:number):void{
    this.displayList.splice(i,1);
  }
 

}

