import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ifscfinder',
  templateUrl: './ifscfinder.component.html',
  styleUrls: ['./ifscfinder.component.css']
})
export class IfscfinderComponent implements OnInit {
  public stateList: Array<string>;
  public districtList: Array<string>;
  public bankList: Array<string>;
  public branchList: Array<string>;
  public showResult:boolean;
  public myform:FormGroup;
  public output:Array<object>;
  public ifscDetails: string;
  constructor() { }

  ngOnInit() {
    this.stateList=['Delhi','Kolkata','Mp', 'Bihar','Uttar pardesh'];
    this.districtList =['North','South','East', 'West'];
    this.bankList=['HDFC','ICICI','Canara', 'PNB'];
    this.branchList=['uttam nagar','dwarka','mohan garden', 'rama park'];
    this.myform= new FormGroup({
      state: new FormControl(),
      district: new FormControl(),
      branch: new FormControl(),
      bank: new FormControl()
    })
  }
  public findDetails():void{
    let check = this.myform.value;
    let branchDetails = JSON.parse(localStorage.getItem('usersData'));
     this.output = branchDetails.filter((data) =>{
      return data.state == check.state && data.district == check.district && data.bank == check.bank && data.branch == check.branch ;
     
    });
    this.ifscDetails = this.output[0]["ifsc"];
    this.showResult = true;
  } 
}
