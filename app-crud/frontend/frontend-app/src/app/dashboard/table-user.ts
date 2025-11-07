import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';
import { User } from '../user-interface';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table-user',
  imports: [MatTableModule],
  templateUrl: './table-user.html',
  styleUrl: './table-user.scss',
})
export class TableUser implements OnInit {
  users: User[] = [];
  columnsToDisplay: string[] = [
    'id',
    'name', 
    'email', 
    'phone', 
    'created_at', 
    'update_at'
  ];
  
  constructor(private userService: UserService) {};

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (buffer: any) => {
        this.users = buffer.data;
      }
    )
  }

}
