import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private actRoute : ActivatedRoute, private _spoti : SpotiService) { }

  ngOnInit() {
    this.actRoute.params
    .map( params => params['id'])
    .subscribe( id => {
      console.log(id);
    })
  }

}
