import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { spendingdata } from '../model/spendingdata';
 
@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  // private apiUrl1 = 'http://localhost:8080/api/weekly-spending'; // Endpoint URL
  // private apiUrl2 = 'http://localhost:8080/api/monthly-spending'; // Endpoint URL

  // constructor(private http:HttpClient) { }

  // getWeeklySpending() {
  //   return this.http.get<spendingdata[]>(this.apiUrl1);
  // }

  // getMonthlySpending(){
  //   return this.http.get<spendingdata[]>(this.apiUrl2);
  // }


  private apiUrl = 'data/db.json'; // Path to your db.json file

  constructor(private http: HttpClient) { }

  getWeeklySpending(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
