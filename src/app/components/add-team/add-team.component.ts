import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  teamForm = FormGroup;
  team: any = {};

  constructor() { }

  ngOnInit() {
  }

  addTeam(){
    console.log("here team object" , this.team);

    let idTeam = JSON.parse(localStorage.getItem("teamId") || "1")
    let teames =JSON.parse(localStorage.getItem("teames") || "[]");

   this.team.id = idTeam;
   teames.push(this.team);

    localStorage.setItem("teames", JSON.stringify(teames));
        localStorage.setItem("teamId", idTeam + 1);
  }
}
