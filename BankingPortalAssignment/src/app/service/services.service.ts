import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = "https://run.mocky.io/v3/13806a53-db43-4b22-bb86-fc36008c5644";
  constructor(private http: HttpClient) { }

  getPaymentDetails() {
    console.log(this.http.get(this.url))
    return this.http.get(this.url);
  }
}
