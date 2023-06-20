import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { WeatherComponent } from './components/weather/weather.component';



const routes: Routes = [

  

{path:"" ,component: HomeComponent},

//http://localhost:4200/Singn in

{path:"SingnIn" ,component: LoginComponent},

{path:"subscription" ,component: SignUpComponent},

{path:"addMatch" ,component: AddMatchComponent},
{path:"addTeam" ,component:AddTeamComponent },
{path:"addPlayer" ,component: AddPlayerComponent},

{path:"Matches" ,component: MatchesComponent},

{path:"players" ,component: PlayersComponent},

{path:"admin" ,component: AdminComponent},
{path:"matchInfo" ,component: MatchInfoComponent},
{path:"playerInfo" ,component: PlayerInfoComponent},
{path:"teamInfo" ,component: TeamInfoComponent},

{path:"editMatch/:x" ,component: EditMatchComponent},

{path:"search" ,component: SearchMatchComponent},

{path:"weather" , component : WeatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
