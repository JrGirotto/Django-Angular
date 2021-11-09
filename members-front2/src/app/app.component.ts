import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-front';

  selected_member = {id: 0, name: "", surname:""};

  members = [
    {name: 'Member 01', id:1, surname: 'Ciclano', photo: 'www.1'},
    {name: 'Member 02', id:2, surname: 'Ciclano2', photo: 'www.2'},
    {name: 'Member 03', id:3, surname: 'Ciclano3', photo: 'www.3'},
  ];

  constructor(private api:ApiService) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data
      },
      error => {
        console.log('Aconteceu um erro');
      }
    );
  };

  memberClicked = (member) => {
    this.api.getMember(member.id).subscribe(
      data => {
        console.log(data);
        this.selected_member = data;
      },
      error => {
        console.log('Aconteceu um erro');
      }
    );
  };





}
