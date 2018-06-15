import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ApiServiceService } from "./api-service.service";
import { User } from "../user/user";
import Repository from "../repositories/repository";

@Injectable()
export class RepoResolver implements Resolve<any> {

    repo: Observable<Repository>;

    constructor(private api: ApiServiceService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        this.repo = this.api.getRepos(route.params['repo']);
        return this.repo;

    }

    
}