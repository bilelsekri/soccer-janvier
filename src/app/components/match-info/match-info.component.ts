import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {

  findMatch: any;

  constructor(private matchService: MatchService) { }

  ngOnInit() {

    let id = localStorage.getItem("id");
    this.matchService.getMatchById(id).subscribe(


      (response) =>{

        console.log("here response from BE"  ,response.match );

        this.findMatch = response.match;

    }
    );

  }

}

    // let id =localStorage.getItem("id");
    // let matches =JSON.parse(localStorage.getItem("matches") || "[]");

    // for (let i = 0; i < matches.length; i++) {

    //   if (matches[i].id== id) {

    //     this.findMatch=matches[i];

    //     break;

    //   }


    // }


