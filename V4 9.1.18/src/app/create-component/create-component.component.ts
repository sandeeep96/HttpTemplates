import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';

import { MyData } from '../mydata';
import {MyDataService} from '../mydata.service';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  constructor(private dataService: MyDataService, private location: Location,private router: Router) { }

  forms;

  public data: MyData= { 
    configId: 0,
    constant: '',
    value:'',
    editFlag:true,
  }

  ngOnInit() {
    this.forms= new FormGroup({
      Constant:new FormControl("",Validators.required) , 
      ConfigId:new FormControl("",Validators.required) ,
      Value:new FormControl("",Validators.required) ,
      EditFlag:new FormControl("",Validators.required) ,
        });
  }

  goBack(): void {
    this.router.navigate(['/home' ]);
  }

  createDetail(formm): void {
    this.data.configId=formm.ConfigId;
    this.data.constant=formm.Constant;
    this.data.value=formm.Value;
    this.data.editFlag=formm.EditFlag;
 
    if (!this.data) { return; }
    this.dataService.createData(this.data)
      .subscribe(data => {
        console.log(data.configId+" with constant "+data.constant+" is added");
        this.goBack();
      });
  }
}
