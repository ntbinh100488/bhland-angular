import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class PlacesService {
    outsideProvinceUrl: string;
    outsideDistrictUrl: string;
    outsideWardUrl: string;

    localBaseUrl: string;

    cityRoute: string = 'cities';
    districtRoute: string = 'districts';
    wardRoute: string = 'wards';

    constructor(private http: HttpClient) {
        this.outsideProvinceUrl = 'https://vapi.vnappmob.com/api/province/';
        this.outsideDistrictUrl = 'https://vapi.vnappmob.com/api/province/district/';
        this.outsideWardUrl = 'https://vapi.vnappmob.com/api/province/ward/';
        
        this.localBaseUrl = 'http://localhost:3000/api/';
    }

    getAllOutsideCityProvinces(callback:any) {
        this.http.get<any>(this.outsideProvinceUrl).subscribe(outsideProvinceData => {
            callback(outsideProvinceData);
        })
    }

    getOutsideDistrictsByProvinceId(cityProvinceId:string, callback:any) {
        this.http.get<any>(this.outsideDistrictUrl + cityProvinceId).subscribe(outsideDistrictData => {
            callback(outsideDistrictData);
        })
    }

    getOutsideWardByDistrictId(districtId:string, callback:any) {
        this.http.get<any>(this.outsideWardUrl + districtId).subscribe(outsideWardData => {
            callback(outsideWardData);
        })
    }

    createLocalCity(localCity:any, callback:any){
        this.http.post<any>(this.localBaseUrl + this.cityRoute, localCity).subscribe(localCityData => {
            callback(localCityData);
        })
    }

    createLocalDistrict(district:any, callback:any){
        this.http.post<any>(this.localBaseUrl + this.districtRoute, district).subscribe(localDistrictData => {
            callback(localDistrictData);
        })
    }

    createLocalWards(wards:any[], callback:any){
        try {
            this.http.post<any>(this.localBaseUrl + this.wardRoute +'/bulkCreate', wards).subscribe(localWardsData => {
                callback(localWardsData);
            })
        } catch (error) {
            // createLocalWards: catch error
            callback(error);
        }
    }
}