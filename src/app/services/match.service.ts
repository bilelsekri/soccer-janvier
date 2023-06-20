import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

//express server destination adress(adresse de notre serveur back end)

  matchUrl:string="http://localhost:3000/api/matches";

  constructor(private httpClient:HttpClient) { }

  
  getAllMatches()
  {

    return this.httpClient.get<{matches: any, message: string  }>(this.matchUrl);
  }
  
  getMatchById(x){


    return this.httpClient.get<{match :any}>(`${this.matchUrl}/${x}`);
    // return this.httpClient.get(this.matchUrl + "/" + x);

  }
  
  deleteMatch(y){

    return this.httpClient.delete(`${this.matchUrl}/${y}`);
  }

  
  addMatch(matchObj){

    return this.httpClient.post<{message : string}>(this.matchUrl ,matchObj );
  }

  

  

  editMatch(newMatch){

    return this.httpClient.put(this.matchUrl ,newMatch );
  }

  //obj : score one :3 score tw:2
  searchMatch(obj){

    return this.httpClient.post< {findedMatches : any , msg :string}>(`${this.matchUrl}/search` , obj);
  }



}
