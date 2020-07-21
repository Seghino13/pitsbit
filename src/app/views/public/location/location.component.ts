import { Component, OnInit } from '@angular/core';
import { GraphQlService } from 'src/app/services/graph-ql/graph-ql.service';
import { RestService } from 'src/app/services/rest/rest.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
  providers: [ GraphQlService, RestService ]
})
export class LocationComponent implements OnInit {
  grapQl = false;
  locations: any = [];
  info: any;
  page = 0;
  constructor(private graphQlService: GraphQlService, private restService: RestService) { }

  ngOnInit() {
    this.getServices();
  }
  getServices() {
    if( !this.grapQl ){
      this.getCharacthersRest( 1 );
    } else{
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
    this.restService.getLocations( this.page ).subscribe( response=> {
      response['results'].forEach(element => {
        this.locations.push( element );
      });
      this.info = response['info'];
      console.log( this.locations );
      console.log( this.info );
    });
  }
}

