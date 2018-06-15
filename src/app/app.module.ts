import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { ROUTES } from './app.routes';
import { UserResolver } from './services/userResolver';
import { ApiServiceService } from './services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoriesComponent } from './repositories/repositories.component';
import { RepoResolver } from './services/repoResolver';
import { FollowerResolver } from './services/followerResolver';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), 
    FormsModule, 
    HttpClientModule
  ],
  providers: [
    ApiServiceService, 
    UserResolver,
    RepoResolver,
    FollowerResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
