import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BhCommonService {

    constructor() { }

    routeUrlToSchemaName(routeName: string): string{
        let pathNames = routeName.split('?');
        return pathNames[0].replace("/", '');
    }

    createArrayNumberFromRange(lowEnd: number, highEnd: number): number[]{
        var numberArr = [];
        for (var i = lowEnd; i <= highEnd; i++) {
            numberArr.push(i);
        }
        return numberArr;
    }
}
