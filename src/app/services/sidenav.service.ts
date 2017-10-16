import {Injectable} from '@angular/core';

@Injectable()
export class SidenavService {
    get component(): any {
        return this._component;
    }
    set component(value: any) {
        this._component = value;
    }

    private _component: any;

    constructor() {
    }

    open() {
        this._component.open();
    }

    close() {
        this._component.close();
    }
}
