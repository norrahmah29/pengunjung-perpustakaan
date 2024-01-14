import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  api: string = 'http://172.20.10.2/perpustakaan/';
  constructor(
    public http: HttpClient
  ) { }

  crud(body: any, file: string) {
    let header = new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    });

    let options = {
      headers: header
    };
    return this.http.post(this.api + '/' + file, JSON.stringify(body), options)
      .pipe(
        timeout(60000),
        map((res: any) => res)
      );
  }
}
