import { Component, OnInit } from '@angular/core';
import { GraphQlService } from 'src/app/services/graph-ql/graph-ql.service';
import { RestService } from 'src/app/services/rest/rest.service';
import { Characters } from 'src/app/models/Characters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ GraphQlService, RestService ]
})
export class HomeComponent implements OnInit {
  q = '';
  grapQl = false;
  characteres: any = [];
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
    this.restService.getCharacters( this.page ).subscribe( response=> {
      response['results'].forEach(element => {
        this.characteres.push( element );
      });
      this.info = response['info'];
    });
  }

}
