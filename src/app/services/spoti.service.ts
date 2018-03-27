import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpBackend} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotiService {
  artists: any[] = [];
  urlSpoti: string = "https://api.spotify.com/v1/";
  token: string = "BQCN2v-TumlqirVIHi6xKqkmIlT1BJ3u9PSnYGWmIpZX3N7Pr2kH8eFZcrIUhCqC0Uub_L-OCIj6QFGU5KQ";

  constructor(public http: HttpClient) {
    console.log("Service running..");
  }

  private getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      authorization: "Bearer " + this.token
    });
    return headers;
  }

  getTop(id: string) {
    let url = `${this.urlSpoti}artists/${id}/top-tracks?country=us`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtist(id: string) {
    let url = `${this.urlSpoti}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
    // .map( (resp : any) =>{
    // this.artists = resp.artists.items;
    // return this.artists;
    // })
  }

  getArtists(term: string) {
    let url = `${
      this.urlSpoti
    }search?query=${term}&type=artist&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map((resp: any) => {
      this.artists = resp.artists.items;
      return this.artists;
    });
  }
}
