import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/news/news.component';
import { ResultComponent } from './components/result/result.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { CupComponent } from './components/cup/cup.component';
import { InfoComponent } from './components/info/info.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AdminComponent } from './components/admin/admin.component';
import { MatechesTableComponent } from './components/mateches-table/mateches-table.component';
import { TeamTableComponent } from './components/team-table/team-table.component';
import { PlayerTableComponent } from './components/player-table/player-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    ResultComponent,
    StatsComponent,
    BlogComponent,
    CupComponent,
    InfoComponent,
    ArticleComponent,
    HomeComponent,
    LoginComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    SignUpComponent,
    MatchesComponent,
    PlayersComponent,
    PlayerComponent,

    AdminComponent,
    MatechesTableComponent,
    TeamTableComponent,
    PlayerTableComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayerInfoComponent,
    EditMatchComponent,
    AsterixPipe,
    SearchMatchComponent,
    WeatherComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
