import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiService {

  artists : any[] = [];
  urlSpoti : string = 'https://api.spotify.com/v1/';
  token :string = 'BQB2MceCG2UB11KiC__nmKfXLMWKwcIivh4hALt0IZ5mMmrscguZ39278HqT5xJBDnRf4WXrCmSxBEudELc';


  constructor(public http : HttpClient) {
    console.log("Service running..");
   }

   private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization' : 'Bearer ' + this.token
    });
    return headers;
   }

   getArtist(id: string){
    let url = `${ this.urlSpoti }artist/${ id }`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers}).map( (resp : any) =>{
          this.artists = resp.artists.items;
          return this.artists;
    })
   }

   getArtists(term : string){
    let url = `${ this.urlSpoti }search?query=${ term }&type=artist&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, {headers}).map( (resp : any) =>{
          this.artists = resp.artists.items;
          return this.artists;
    })
   }

}
