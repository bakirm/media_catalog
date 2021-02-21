import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediaitem } from '../models/mediaitem.model';

const baseUrl = 'http://localhost:8080/api/mediaitem/search';

@Injectable({
  providedIn: 'root',
})
export class SearchMediaService {
  constructor(private http: HttpClient) {}
  

  createSearch(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
