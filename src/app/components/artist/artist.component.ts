import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  tracks: any[] = [];

  constructor(private actRoute : ActivatedRoute, private _spoti : SpotiService) { }

  ngOnInit() {
    this.actRoute.params
    .map( params => params['id'])
    .subscribe( id => {
      // console.log(id);
      this._spoti.getArtist(id).subscribe( artist => {
        this.artist = artist;
        console.log( artist )
      })
      this._spoti.getTop(id)
      .map( (resp : any) => resp.tracks)
      .subscribe( tracks => {
        this.tracks = tracks
      })
    })
  }

}
