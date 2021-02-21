import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mediaitem } from '../models/mediaitem.model';

const baseUrl = 'http://localhost:8080/api/mediaitem';
const baseUrls = 'http://localhost:8080/api/mediaitem/search';

@Injectable({
  providedIn: 'root',
})
export class MediaitemService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Mediaitem[]> {
    return this.http.get<Mediaitem[]>(baseUrl);
  }

  get(id: any): Observable<Mediaitem> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  createSearch(data: any, isasc: any, name: any): Observable<any> {
    let params = new HttpParams().set('isasc', isasc).set('name', name);
    return this.http.post(baseUrls, data, { params: params });
  }

  sorter(data: any, isasc: any, name: any): Observable<any> {
    let params = new HttpParams().set('isasc', isasc).set('name', name);
    return this.http.post(baseUrls, data, { params: params });
  }
}
