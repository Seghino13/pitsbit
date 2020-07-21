import { Injectable } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphQlService {

  constructor(private apollo: Apollo, httpLink: HttpLink) {
   /*  apollo.create({
      link: httpLink.create({ uri: environment.apiUrl + 'character/', }),
      cache: new InMemoryCache(),
    }); */
  }

  getCharacters( ) {
    /* this.apollo.query<any>({
      query: gql`query {
        characters(page: 2) {
          info {
            count
          }
          results {
            name
          }
        }
        character(id: 1) {
          id
        }
      }`
    }).subscribe(result => {
      console.log( result );
    }); */
  }
}
