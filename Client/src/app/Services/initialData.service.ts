import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _httpclient: HttpClient,
    ) { }

    getUser(filter, projection) {
      const details = {
        filter,
        projection
      }
      return this._httpclient
          .post(`http://localhost:8086/api/person/getData`, {details}).pipe();
    }

}
