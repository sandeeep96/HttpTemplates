import { Component, OnInit } from '@angular/core';
import { Location }                 from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Router }            from '@angular/router';
import {MyData} from '../mydata';
import {MyDataService} from '../mydata.service';

@Component({
  selector: 'app-description-component',
  templateUrl: './description-component.component.html',
  styleUrls: ['./description-component.component.css']
})
export class DescriptionComponentComponent implements OnInit {

  public data: any;
 public loggedIn: boolean=false;

 

  constructor(private dataService: MyDataService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

    ngOnInit(): void {
      console.log("ngonint start");
      this.route.paramMap
        .switchMap((params: ParamMap) => this.dataService.getDataById(+params.get('id')))
        .subscribe(res =>{console.log("description component", res); this.data = res[0]});
        console.log("ngonint end");
    }

  goBack(): void {
    let link = ['home',];
    this.router.navigate(link);
  }

  deleteDetail(): void {
    this.dataService
        .deleteDataById(this.data.configId)
        .subscribe((req) => {
          console.log("deleted request",req);
          this.location.back();
        });
  }

  saveDetail(): void {
     this.dataService.updateData(this.data)
    .subscribe(() => this.goBack());
  }

  exitEditDetail(){
    this.loggedIn=false;
  }

  editDetail(){
    this.loggedIn=true;
  }
}
