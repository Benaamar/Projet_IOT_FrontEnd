import { UserService } from './../user.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from 'app/user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


  userProfile: UserProfile = new UserProfile();
  submitted = false;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.userProfile = new UserProfile();
  }

  save() {
    this.userService.createUserProfile(this.userProfile)
      .subscribe(data => console.log(data), error => console.log(error));
    this.userProfile = new UserProfile();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/userProfiles']);
  }
}
