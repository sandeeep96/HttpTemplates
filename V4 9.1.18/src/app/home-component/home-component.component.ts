import { Component, OnInit } from '@angular/core';
import {MyData} from '../mydata';
import {MyDataService} from '../mydata.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Router }            from '@angular/router';


// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  name = '';
  datalist: Observable<MyData[]>;


  private searchTerms = new Subject<string>();

    constructor(
      private dataService: MyDataService,
      private router: Router) { }
  
      random:string='';

      search(term: string): void {
        console.log(term);
        this.searchTerms.next(term);
      }
    ngOnInit() {

  }

  gotoDetail(data: MyData): void {
    let link = ['home/description', data.configId];
    this.random='';
    this.search('');
    this.router.navigate(link);
    
  }

  LogOut():void{
    this.router.navigate(['/']);
  }

}
