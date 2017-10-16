import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {ErrorHandlerService} from './error-handler.service';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import _ from 'lodash';

const API_BASE_URL = `https://livedemo.xsolla.com/fe/test-task/baev/`;

@Injectable()
export class ApiService {

    constructor(private http: Http, private _error: ErrorHandlerService) {
    }

    public get(method: string, params?: any): Observable<any> {
        const url = this._generateURL(method, params);
        return this.http.get(url)
            .map(this._checkResponse)
            .catch(error => this._handleError(error));
    }

    public put(method: string, body: any): Observable<any> {
        const url = this._generateURL(method);
        return this.http.put(url, body)
            .map(this._checkResponse)
            .catch(error => this._handleError(error));
    }

    public post(method: string, body?: any): Observable<any> {
        const url = this._generateURL(method);
        return this.http.post(url, body)
            .map(this._checkResponse)
            .catch(error => this._handleError(error));
    }

    private _generateURL(method: string, query?: Object) {
        let queryString;
        const url = new URL(method, API_BASE_URL);
        if (_.isUndefined(query)) {
            return url.toString();
        }
        if (_.isObject(query)) {
            queryString = '?' + _.chain(query).mapKeys((value, key) => {
                return _.join([key, value], '=');
            }).keys().join('&').value();
        } else if (_.isString(query)) {
            queryString = `/${query}`;
        }

        return `${url}${queryString}`;
    }

    private _checkResponse(res: Response) {
        if (!res.ok) {
            throw Observable.throw(res);
        }
        if (res.text() === '') { // Костыль. Отправлять при PUT ПУСТОЙ ответ это эпично...
            return res;
        } else {
            const _response = res.json();
            if (_response.message) {
                throw Observable.throw(_response);
            }
            return _response;
        }
    }

    private _handleError(error: ErrorObservable) {
        console.log(error);
        this._error.handle(error.error);
        return error;
    }
}
