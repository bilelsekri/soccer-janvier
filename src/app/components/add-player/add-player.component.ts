import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm = FormGroup;
  player: any = {};

  constructor() { }

  ngOnInit() {
  }

  addPlayer(){
    console.log("here team object" , this.player);
    let idPlayer = JSON.parse(localStorage.getItem("playerId") || "1")

    let players =JSON.parse(localStorage.getItem("players") || "[]");

   
    this.player.id = idPlayer;
    players.push(this.player);

    localStorage.setItem("players", JSON.stringify(players));

    localStorage.setItem("playerId", idPlayer + 1);
  }

}
