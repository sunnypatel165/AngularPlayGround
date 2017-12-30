import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router/src/interfaces";
import { Router } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class ProductGaurdService implements CanActivate{
    constructor(private _router : Router){

    }
    canActivate(_route: ActivatedRouteSnapshot): boolean {
        let id = +_route.url[1].path;
        if(isNaN(id) || id<1){
            alert('invalid product id');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }


}