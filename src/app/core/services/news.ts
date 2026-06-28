import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class News {
    private api =
    'http://localhost:8000/news';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.api);
  }
}
