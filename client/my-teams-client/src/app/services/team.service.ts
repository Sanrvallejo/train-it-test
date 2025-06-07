import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../model/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor( private readonly http: HttpClient) { }

  BASE_URL: string = `http://localhost:3000`;

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.BASE_URL}/teams`);
  }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(`${this.BASE_URL}/teams`, team);
  }

  deleteTeam(id: number):  Observable<Team> {
    return this.http.delete<Team>(`${this.BASE_URL}/teams/${id}`);
  }
}
