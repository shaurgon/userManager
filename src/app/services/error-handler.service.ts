import {Injectable, OnInit} from '@angular/core';
import {Md2Toast} from 'md2';
// import _ from 'lodash';

export interface ErrorResponse {
    message?: string;
    http_status_code?: Number;
    request_id?: string;
    extended_message?: {
        global_errors: any;
        property_errors: Object;
    };
}

@Injectable()
export class ErrorHandlerService implements OnInit {

    constructor(private toast: Md2Toast) {
    }

    /**
     * Handles Error message
     * @param {ErrorResponse} error
     */
    public handle(error: ErrorResponse) {
        const message = `<strong>Code ${error.http_status_code}</strong><br>${error.message}.<br><i>More info in console</i>`;
        console.groupCollapsed('API Response Error');
        console.log('Full log', error);
        this.toast.show(message, 5000);
        // More messages, lol =)
        // _.forEach(error.extended_message.property_errors, (messages, param) => {
        //     _.forEach(messages, message => {
        //         console.log(`[${param}] ${message}`);
        //         this.toast.show(`[${param}] ${message}`, 5000)
        //     })
        // });
        console.groupEnd();
    }

    ngOnInit() {
    }

}
