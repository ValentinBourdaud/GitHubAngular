import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user/user';
import { ParamMap } from '@angular/router';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  login : string;
  user : User;
  
  constructor(private route: ActivatedRoute, private api : ApiServiceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.login = params.get('users');
    });

    this.api.getUsers(this.login).subscribe(u => this.user = u);
  }

}
