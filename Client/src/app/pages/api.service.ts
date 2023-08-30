import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private _httpclient: HttpClient,
    ) { }

    getUser(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/person/getUser`, { details }).pipe();
    }

    getMeasurement(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/getMeasurement`, { details }).pipe();
    }

    addUser(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/person/addUser`, { details }).pipe();
    }

    searchUser(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/person/searchUser`, { details }).pipe();
    }
    deleteUser(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/person/deleteUser`, { details }).pipe();
    }
    deleteMeasurement(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details }).pipe();
    }
    searchMeasurement(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details }).pipe();
    }
    editMeasurement(filter, projection) {
        const details = {
            filter,
            projection
        }
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details }).pipe();
    }
}
