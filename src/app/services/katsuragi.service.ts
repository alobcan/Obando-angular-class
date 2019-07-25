import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KatsuragiService {
  private url: string='http://quotes.stormconsultancy.co.uk/random.json';
  constructor(private http: HttpClient) { }
  getMensaje(): Observable<any>{
    return this.http.get(this.url);
  }
}
