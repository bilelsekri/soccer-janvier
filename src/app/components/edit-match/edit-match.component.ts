import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  matchForm :FormGroup;
  match :any ={};
  id: any;
  
  matches :any =[];

  constructor(private activatedRoute: ActivatedRoute ,
    private router :Router ) { }

  ngOnInit() {

    // capture+rechercheparametre +x disponible dans routing 

    this.id = this.activatedRoute.snapshot.paramMap.get("x");

    this.matches = JSON.parse(localStorage.getItem("matches") ||  "[]"   );

    // for (let i = 0; i < matches.length; i++) {
    //   if (this.matches[i].id == this.id) {
    //     this.findedMatch == this.matches[i];
    //     break;
    //   }

    this.match= this.matches.find((elt)=> {return elt.id == this.id})
      
  
  
  }

  editMatch(){

console.log("here new match" , this.match);

for (let i = 0; i < this.matches.length; i++) {

  if (this.matches[i].id== this.id) {
    
    this.matches[i] =this.match;
    break;
  }
  
  
}

localStorage.setItem("matches" , JSON.stringify(this.matches));

this.router.navigate(["admin"]);

  }

}
