import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {

  searchForm: FormGroup;
matches : any;




  constructor(private formBuilder: FormBuilder,

    private matchService: MatchService) { }

  ngOnInit() {

    this.searchForm = this.formBuilder.group({


      scoreOne: ["", [Validators.required]],
      scoreTwo: ["", [Validators.required]],
    })

  }
  searchMatch() {

    console.log("here object", this.searchForm.value);

    this.matchService.searchMatch(this.searchForm.value).subscribe(

      (response) => {

        console.log("here response from BE ", response.findedMatches);

        this.matches= response.findedMatches;


      });



  }




}



