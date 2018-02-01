import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {MyData} from './mydata';

@Injectable()
export class MyDataService {

    constructor(private http: Http) { }

    private endPointUrl = 'http://172.24.145.47:8086/dp-rest/resources/configuration';  // URL to web api

    private getIdEndPointUrl(id:number): string{   // URL to web api by id
      return this.endPointUrl+"/id/?id="+id;
    }
    
    private headers = new Headers({'Content-Type': 'application/json'});

    getAllData() : Observable<any>{
       return this.http
         .get(this.endPointUrl)
         .map(response=>response.json())
         .catch(this.handleError);
      }

    getDataById(id: number) : Observable<any>{
      
      return this.http
        .get(this.getIdEndPointUrl(id))
        .map(response=>response.json())
        .catch(this.handleError);
    }
    
    updateData(dataToBeUpdated: any) : Observable<any>{
      return this.http
        .put(this.endPointUrl, JSON.stringify(dataToBeUpdated), {headers: this.headers})
        .map(response=>response.json())
        .catch(this.handleError);
    }

    updateDataById(dataToBeUpdated: any) : Observable<any>{
      return this.http
        .put(this.getIdEndPointUrl(dataToBeUpdated.id), JSON.stringify(dataToBeUpdated), {headers: this.headers})
        .map(response=>response.json())
        .catch(this.handleError);
    }

    createData(dataToBeCreated) : Observable<any>{
      return this.http
        .post(this.endPointUrl, JSON.stringify(dataToBeCreated), {headers: this.headers})
        .map(response=>response.json())
        .catch(this.handleError);
    }
 
    deleteDataById(id: number) : Observable<any>{
      return this.http
        .delete(this.getIdEndPointUrl(id))
        .map(response=>response.json())
        .catch(this.handleError);
    }
        
    private handleError(error: any): Observable<any> {
      return Observable.throw(error.json().error || 'Server error');
    }
}