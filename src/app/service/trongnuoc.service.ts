import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Buukien } from '../model/buugui';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TrongnuocService {

  API = 'http://localhost:3000/nguoinhan';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAllBuuKien(): Observable<Buukien[]> {
    return this.httpClient.get<Buukien[]>(this.API, this.httpHeader);
     
  }

  AddBuuKien(data: Buukien): Observable<Buukien> {
    return this.httpClient.post(this.API, data);
  }

  deleteBuuKien(id: any):Observable<Buukien>{
    return this.httpClient.delete(this.API +"/" +id, this.httpHeader);

  }
  updateBuuKien(buukien: Buukien): Observable<Buukien>{
    return this.httpClient.put(`${this.API}/${buukien.id}`, buukien);
  }
  
  getBuuKienById(id: any): Observable<Buukien>{
    return this.httpClient.get(this.API+ "/" + id);
  
  }
}
