import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { payment } from '../models/payment';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = "https://run.mocky.io/v3/8661a84f-834b-4a54-92d6-ff6277d7798c";
  constructor(private http: HttpClient) { }

  getPaymentDetails() {
    console.log("hi", this.http.get<payment[]>(this.url))
    return this.http.get<payment[]>(this.url);
  }
}
