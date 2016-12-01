import {Injectable} from '@angular/core';
import { Info } from './info';

@Injectable()
export class InfoService {
    myInfo = new Info();

    getInfo(): Info {
        return this.myInfo;
    }
}