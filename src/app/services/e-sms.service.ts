import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ESmsService {

    constructor(private http: HttpClient) { }

    buildSuccessResponse = (data) => {
        return {
            dataset: data,
            status: 200,
            error: null
        }
    }

    buildErrorResponse = (data, error) => {
        return {
            dataset: data,
            status: 200,
            error: error
        }
    }

    sendSMS(phoneNumber:string, smsContent:string, callback:any): any {
        smsContent = '123456 la ma xac minh dang ky Baotrixemay cua ban';
        let sendSMSUrl = `http://rest.esms.vn/MainService.svc/json/SendMultipleMessage_V4_get?Phone=${phoneNumber}&Content=${smsContent}&ApiKey=${environment.ESMS.API_KEY}&SecretKey=${environment.ESMS.SECRET_KEY}&SmsType=${environment.ESMS.SMS_TYPE}&Brandname=${environment.ESMS.BRAND_NAME}`;

        this.http.get<any>(sendSMSUrl).subscribe(result => {
            if(callback){
                callback(this.buildSuccessResponse(result));
            }
        });

        return {name:'Binh'};
    }
}