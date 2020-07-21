import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  getCharacters( page: number ) {
    return this.httpClient.get( environment.apiUrlRest + 'character/?page=' + page);
  }

  getLocations( page: number ) {
    return this.httpClient.get( environment.apiUrlRest + 'location/?page=' + page);
  }

  getEpisodies( page: number ) {
    return this.httpClient.get( environment.apiUrlRest + 'episode/?page=' + page);
  }
}
