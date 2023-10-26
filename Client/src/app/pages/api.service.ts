import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        private _httpclient: HttpClient,
    ) { }

    getUser(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/person/getUser`, { details:filter }).pipe();
    }

    getMeasurement(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/getMeasurement`, { details:filter }).pipe();
    }

    addUser(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/person/addUser`, { details:filter }).pipe();
    }

    searchUser(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/person/searchUser`, { details:filter }).pipe();
    }
    deleteUser(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/person/deleteUser`, { details:filter }).pipe();
    }
    deleteMeasurement(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details:filter }).pipe();
    }
    searchMeasurement(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details:filter }).pipe();
    }
    editMeasurement(filter) {
        return this._httpclient
            .post(`http://localhost:8086/api/measurement/deleteMeasurement`, { details:filter }).pipe();
    }

    backupData(filter) {
        return this._httpclient
            .post(`http://localhost:8086/backup`, { details:filter }).pipe();
    }

}
