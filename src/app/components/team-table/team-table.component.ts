import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-table',
  templateUrl: './team-table.component.html',
  styleUrls: ['./team-table.component.css']
})
export class TeamTableComponent implements OnInit {

   teamsTab : any =[];

  constructor(private router :Router) { }

  ngOnInit() {

     this.teamsTab = JSON.parse(localStorage.getItem("teames") || "[]")
  }

  deleteTeam(selectedId){

    for (let i = 0; i < this.teamsTab.length; i++) {
     if (this.teamsTab[i].id==selectedId) {

      this.teamsTab.splice(i, 1);
      break;
      
     }
      
    }

localStorage.setItem("teames" , JSON.stringify(this.teamsTab));

  }


  goToInfo(x){

    localStorage.setItem("id" ,x);

    this.router.navigate(["teamInfo"]);


  }


}
