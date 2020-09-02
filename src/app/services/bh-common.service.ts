import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BhCommonService {

  constructor() { }

  routeUrlToSchemaName(routeName: string): string{
      return routeName.replace("/", '');
  }
}
