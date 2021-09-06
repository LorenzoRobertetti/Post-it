import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {
  key: string;
  baseURL: string =
    'https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/kvaas-giwjg/service/kvaas/incoming_webhook';

  constructor(private http: HttpClient) {}

  public generateKey() {
    return this.http.post(this.baseURL + '/new', '');
  }

  public getData(): Observable<Object> {
    console.log(this.baseURL + '/get?key=' + this.key);
    return this.http.get(this.baseURL + '/get?key=' + this.key);
  }

  public putData(datas: Object): Observable<Object> {
    var obj = JSON.stringify(datas);
    return this.http.post(
      this.baseURL + '/post?key=' + this.key + '&msg=' + obj,
      ''
    );
  }
}
