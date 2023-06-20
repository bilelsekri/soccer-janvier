import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

@Input() matcheInput :any;
  
  constructor() { }

  ngOnInit() {
  }

  scoreColor(s1,s2)
  {

if (s1 >s2) {
  return ["green", ("Win")];

}else if (s1 <s2) {
  return ["orange", ("Loss")];

}else {

  return ["bleu", ("Draw")];
}

  
}





  
}



  
