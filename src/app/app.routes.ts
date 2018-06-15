import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import { UserResolver } from './services/userResolver';
import { PATH_DETAIL, PATH_HOME } from './constantes';


export const ROUTES: Routes = [ 
{ path: PATH_HOME, component: HomeComponent }, 
{ path: PATH_DETAIL + '/:users' , component: DetailsComponent, resolve : {UserResolver} }

];