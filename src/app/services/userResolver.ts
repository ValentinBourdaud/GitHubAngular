import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ApiServiceService } from "./api-service.service";
import { User } from "../user/user";

@Injectable()
export class UserResolver implements Resolve<any> {

    user: Observable<User>;

    constructor(private api: ApiServiceService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.user = this.api.getUsers(route.params['login']);
        return this.user;

    }

    
}