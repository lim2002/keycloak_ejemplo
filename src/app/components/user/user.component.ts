import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  userService: UserService = inject(UserService);
  users: User[] = [];

  ngOnInit(): void {
    console.log(">>> ngOnInit UserComponent");
    this.userService.getUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    );
  }
}
