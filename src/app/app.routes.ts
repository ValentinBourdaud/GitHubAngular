import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';


export const PATH_HOME:string = '';
export const PATH_DETAIL:string = 'details';

export const ROUTES: Routes = [ 
{ path: PATH_HOME, component: HomeComponent }, 
{ path: PATH_DETAIL, component: DetailsComponent } 
];