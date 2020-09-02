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
}
