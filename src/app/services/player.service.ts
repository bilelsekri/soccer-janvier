
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

//express server destination adress(adresse de notre serveur back end)

  playerUrl:string="http://localhost:3000/api/players";

  constructor(private httpClient:HttpClient) { }

  
  getAllPlayers()
  {

    return this.httpClient.get(this.playerUrl);
  }
  
  getplayerById(x){


    return this.httpClient.get(`${this.playerUrl}/${x}`);
    // return this.httpClient.get(this.matchUrl + "/" + x);

  }
  
  deletePlayer(y){

    return this.httpClient.delete(`${this.playerUrl}/${y}`);
  }

  
  addPlayer(playerObj){

    return this.httpClient.post(this.playerUrl ,playerObj );
  }

  

  

  editPlayer(playerObj){

    return this.httpClient.put(this.playerUrl ,playerObj );
  }



}
