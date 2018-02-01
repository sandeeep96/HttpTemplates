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

    getAllData(): Promise<any> {
       return this.http
         .get(this.endPointUrl)
         .toPromise()
         .then(response => response.json())
         .catch(this.handleError);
      }

    getDataById(id: number): Promise<any> {
      return this.http
        .get(this.getIdEndPointUrl(id))
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }
    
    updateData(dataToBeUpdated: any): Promise<any> {
      return this.http
        .put(this.endPointUrl, JSON.stringify(dataToBeUpdated), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }

    updateDataById(dataToBeUpdated: any): Promise<any> {
      return this.http
        .put(this.getIdEndPointUrl(dataToBeUpdated.id), JSON.stringify(dataToBeUpdated), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }

    createData(dataToBeCreated: any): Promise<any> {
      return this.http
        .post(this.endPointUrl, JSON.stringify(dataToBeCreated), {headers: this.headers})
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }
 
    deleteDataById(id: number): Promise<any> {
      return this.http
        .delete(this.getIdEndPointUrl(id))
        .toPromise()
        .then(res => res.json())
        .catch(this.handleError);
    }
        
    private handleError(error: any): Promise<any> {
      console.error('An error occurred in Service', error);
      return Promise.reject(error.message || error);
    }
}