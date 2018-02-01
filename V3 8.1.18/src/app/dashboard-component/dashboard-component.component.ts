import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import {MyDataService} from '../mydata.service';
import {MyData} from '../mydata';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  dataList: MyData[] = [];

  constructor(private dataService: MyDataService,private router: Router) { }

  ngOnInit() {
    this.dataService.getAllData()
    .then(res => this.dataList = res);
  }

  gotoDetail(data): void {
    this.router.navigate(['home/description', data.configId]);
  }
  
}
