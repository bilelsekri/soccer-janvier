import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  playersTab: any = [

    {name:"messi",position:"atk" ,nbr:10,img:""},
    {name:"cr7",position:"gbk" ,nbr: 7,img:""}
  ]

  constructor() { }

  ngOnInit() {
  }

}
