import { Component, OnInit } from '@angular/core';
import { GraphQlService } from 'src/app/services/graph-ql/graph-ql.service';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-episodies',
  templateUrl: './episodies.component.html',
  styleUrls: ['./episodies.component.scss'],
  providers: [ GraphQlService, RestService ]
})
export class EpisodiesComponent implements OnInit {

  grapQl = false;
  episodies: any = [];
  info: any;
  page = 0;
  constructor(private graphQlService: GraphQlService, private restService: RestService) { }

  ngOnInit() {
    this.getServices();
  }
  getServices() {
    if ( !this.grapQl ) {
      this.getCharacthersRest( 1 );
    } else {
      this.getCharacthers();
    }
  }

  /* GRAHPQL SERVICES */
  getCharacthers() {
    this.graphQlService.getCharacters();
  }

  /* REST SERVICES */
  getCharacthersRest( page: number ) {
    this.page = page;
    this.restService.getEpisodies( this.page ).subscribe( response => {
      response['results'].forEach(element => {
        this.episodies.push( element );
      });
      this.info = response['info'];
      console.log( this.episodies );
      console.log( this.info );
    });
  }
}
