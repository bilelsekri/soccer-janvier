
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

//express server destination adress(adresse de notre serveur back end)

  teamUrl:string="http://localhost:3000/api/teams";

  constructor(private httpClient:HttpClient) { }

  
  getAllTeam()
  {

    return this.httpClient.get(this.teamUrl);
  }
  
  getTeamById(x){


    return this.httpClient.get(`${this.teamUrl}/${x}`);
    // return this.httpClient.get(this.matchUrl + "/" + x);

  }
  
  deleteTeam(y){

    return this.httpClient.delete(`${this.teamUrl}/${y}`);
  }

  
  addTeam(teamObj){

    return this.httpClient.post(this.teamUrl ,teamObj );
  }

  

  

  editTeam(teamObj){

    return this.httpClient.put(this.teamUrl ,teamObj );
  }



}

