import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

export interface ListQueryParams {
    offset: number;
    limit: number;
}

export interface User {
    user_id: Number;
    user_name: string;
    user_custom: string;
    email: string;
    register_date: Date;
    balance: Number;
    wallet_amount: Number;
    wallet_currency: string;
    enabled: Boolean;
}

export class UsersData {
    data: User[] = [];
    recordsTotal = 0;
}

@Injectable()
export class UsersService {

    constructor(private _api: ApiService) {
    }

    /**
     * Lists all users.
     * @example GET /users
     * @param {ListQueryParams} params
     * @returns {Observable<UsersData>}
     */
    list(params?: ListQueryParams): Observable<UsersData> {
        return this._api
            .get('users', params)
            .map(res => {
                return res;
            });
    }

    /**
     * Creates a new user.
     * @example POST /users
     * @returns {Observable<any | any>}
     */
    create() {

    }

    /**
     * Updates user details.
     * @example PUT /users/{user_id}
     * @returns {Observable<any | any>}
     */
    update() {

    }

    /**
     * Lists all transactions of a user.
     * @example GET /users/{user_id}/transactions
     * @returns {Observable<any | any>}
     */
    transactions() {

    }

    /**
     * Updates the balance of a user.
     * @example POST /users/{user_id}/recharge
     * @returns {Observable<any | any>}
     */
    recharge() {

    }

    // checkResponse(res: ApiResponse) {
    //     if (!res.message) {
    //         return res.data;
    //     } else {
    //         const error = new Error;
    //         error.message = res.message || 'Fail to proceed API request';
    //
    //         throw error;
    //     }
    // }
}
