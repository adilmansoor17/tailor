import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {
    }
    public get authObject() {
        const u = JSON.parse(localStorage.getItem('currentUser'));
        if(!u) return;
        const auth = {
            id: u._id,
            usertype: u.user_type,
            auth_key: u.auth_key
        };
        return auth;
    }
    post(url, data = {}): Observable<any> {
        const req = Object();
        req.auth = Object();
        req.data = Object();
        req.auth = this.authObject;
        req.data = data;
        return this.http.post(url, req);
    }
}
