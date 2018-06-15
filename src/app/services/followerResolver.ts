import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ApiServiceService } from "./api-service.service";
import { User } from "../user/user";
import Repository from "../repositories/repository";
import Follower from "../follower/follower";

@Injectable()
export class FollowerResolver implements Resolve<any> {

    follower: Observable<Array<Follower>>;

    constructor(private api: ApiServiceService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.follower = this.api.getFollower(route.params['follower']);
        return this.follower;

    }

}