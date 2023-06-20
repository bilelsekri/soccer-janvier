import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {

  playersTab : any =[];

  constructor(private router :Router) { }

  ngOnInit() {

    this.playersTab = JSON.parse(localStorage.getItem("players") || "[]")
  }

  deletePlayer(selectedId){

    for (let i = 0; i < this.playersTab.length; i++) {
     if (this.playersTab[i].id==selectedId) {

      this.playersTab.splice(i, 1);
      break;
      
     }
     }

localStorage.setItem("players" , JSON.stringify(this.playersTab));
     }

     goToInfo(x){

      localStorage.setItem("id" ,x);
  
      this.router.navigate(["playerInfo"]);
  
  
    }

}
