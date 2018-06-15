import { Injectable } from '@angular/core';
import { User } from '../user/user';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from "@angular/common/http";
import { RepositoriesComponent } from '../repositories/repositories.component';
import Repository from '../repositories/repository';
import Follower from '../follower/follower';

const API_BASE_URL: string = 'https://api.github.com/';
const API_USERS: string = 'users/';
const API_REPOS: string = 'repos/';
const API_FOLLOWER: string = 'followers/';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  constructor(private http : HttpClient){

  }

  getUsers(login: string):Observable <User> {
    return <Observable <User>> this.http.get(`${API_BASE_URL}${API_USERS}${login}?access_token=34b7b4fd27e59b5fa8433aafbd5e3a1cc1bcad3d`);
    }

  getRepos(login: string):Observable <Array<Repository>> {
      return <Observable <Array<Repository>>> this.http.get(`${API_BASE_URL}${API_USERS}${login}${API_REPOS}`);
      }

  getFollower(login: string):Observable <Array<Follower>> {
        return <Observable <Array<Follower>>> this.http.get(`${API_BASE_URL}${API_USERS}${login}${API_FOLLOWER}`);
        }
  }

