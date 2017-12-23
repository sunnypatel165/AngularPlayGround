import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http/src/response";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    private productsUrl : string = './api/products/products.json';
    constructor(private _http: HttpClient) {
     
    }
    getProducts() : Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productsUrl).do(data => console.log(JSON.stringify(data))).catch(this.handleError);

    }
    private handleError(httpError: HttpErrorResponse){
        console.log(httpError.message);
        return Observable.throw(httpError.message);
    }
}