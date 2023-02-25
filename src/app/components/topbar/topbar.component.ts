import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit(): void {
    
  }

  logout(){
    this.userService.user = undefined;
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
