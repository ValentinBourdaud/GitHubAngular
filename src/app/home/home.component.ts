import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PATH_DETAIL } from '../constantes';
import { ApiServiceService } from '../services/api-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router, private api:ApiServiceService) { }

  navigateToDetail(login : string) {
    this.api.getUsers(login).toPromise()
    .then(() => this.router.navigate([PATH_DETAIL, login])
  )
    .catch(
      err => console.log(err)
    );
  }
}
