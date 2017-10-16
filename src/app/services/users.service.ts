import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

export interface IListQueryParams {
    offset: number;
    limit: number;
    user_requisites?: string;
    email?: string;
}

export interface IUser {
    user_id: string;
    user_name?: string;
    user_custom?: string;
    email?: string;
    register_date?: Date;
    balance?: Number;
    wallet_amount?: Number;
    wallet_currency?: string;
    enabled?: Boolean;
}


export interface IUsersData {
    data: IUser[];
    recordsTotal: Number;
}

export interface ITransactionsParams {
    datetime_from: string;
    datetime_to: string;
    transaction_type?: string;
}

export interface ITransactionsData {
    operation_id: Number;
    transaction_id: Number;
    coupon_id: Number;
    coupon_code: string;
    transaction_type: string;
    comment: string;
    date: Date;
    amount: Number;
    sum: Number;
    currency: string;
    status: string;
    user_balance: Number;
    user_id: string;
}

export interface IRechargeParams {
    amount: Number;
    comment?: string;
}

export interface IRechargeData {
    amount: Number;
}

@Injectable()
export class UsersService {

    constructor(private _api: ApiService) {
    }

    /**
     * Lists all users.
     * @example GET /users
     * @param {IListQueryParams} params
     * @returns {Observable<IUsersData>}
     */
    list(params?: IListQueryParams): Observable<IUsersData> {
        return this._api
            .get('users', params);
    }

    get(userId: string): Observable<IUser> {
        return this._api
            .get(`users`, userId);
    }

    /**
     * Creates a new user.
     * @example POST /users
     * @returns {Observable<any | any>}
     */
    create(body): Observable<any> {
        return this._api
            .post(`users`, body);
    }

    /**
     * Updates user details.
     * @example PUT /users/{user_id}
     * @returns {Observable<any | any>}
     */
    update(userId: string, body): Observable<any> {
        return this._api
            .put(`users/${userId}`, body)
            .map(res => {
                return {status: 'ok'};
            });
    }

    /**
     * Lists all transactions of a user.
     * @example GET /users/{user_id}/transactions
     * @param {string} userId
     * @param {ITransactionsParams} params
     * @returns {Observable<ITransactionsData>}
     */
    transactions(userId: string, params: ITransactionsParams): Observable<ITransactionsData[]> {
        return this._api
            .get(`users/${userId}/transactions`, params);
    }

    /**
     * Updates the balance of a user.
     * @example POST /users/{user_id}/recharge
     * @returns {Observable<any | any>}
     */
    recharge(userId: string, body: IRechargeParams): Observable<IRechargeData> {
        return this._api
            .post(`users/${userId}/recharge`, body);
    }
}
