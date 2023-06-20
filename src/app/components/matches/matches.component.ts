import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any =[
    
    {scoreOne:1,scoreTwo:3 ,teamOne:"CA" ,teamTwo:"EST"}
    ,{scoreOne:0,scoreTwo:2 ,teamOne:"Css" ,teamTwo:"tatawin"}
    ,{scoreOne:0,scoreTwo:0 ,teamOne:"maknessy" ,teamTwo:"juv"}
    ,{scoreOne:7,scoreTwo:0 ,teamOne:"maknessy" ,teamTwo:"bazda"}
    ]

  constructor() { }

  ngOnInit() {
  }

}
