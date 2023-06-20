import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-mateches-table',
  templateUrl: './mateches-table.component.html',
  styleUrls: ['./mateches-table.component.css']
})
export class MatechesTableComponent implements OnInit {

  matchesTab: any = [];

  constructor(private router: Router,

    private matchService: MatchService) { }

  ngOnInit() {

    this.matchService.getAllMatches().subscribe(

      (response) => {

        console.log("here response from BE ", response);

        this.matchesTab = response.matches;
      }
    )

    //this.matchesTab = JSON.parse(localStorage.getItem("matches") || "[]")
  }

  deleteMatch(selectedId) {

    for (let i = 0; i < this.matchesTab.length; i++) {
      if (this.matchesTab[i].id == selectedId) {

        this.matchesTab.splice(i, 1);
        break;

      }

    }

    localStorage.setItem("matches", JSON.stringify(this.matchesTab));

  }

  goToInfo(x) {

    localStorage.setItem("id", x);

    this.router.navigate(["matchInfo"]);


  }

  goToEdit(y) {


    this.router.navigate([`editMatch/${y}`]);


  }

}
