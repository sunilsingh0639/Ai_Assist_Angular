import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AiMarket {
  api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTodayPredictions() {
    return this.http.get(
      `${this.api}/predictions/today`
    );
  }

  getMarketSnapshot() {
    return this.http.post(
      `${this.api}/market-snapshot`,
      {}
    );
  }
}
