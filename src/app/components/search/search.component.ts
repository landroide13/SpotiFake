import { Component, OnInit } from '@angular/core';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  term :string = '';

  constructor(public _spoti : SpotiService) { }

   lookup(){
  
    if(this.term.length == 0){
        return;
    }

    this._spoti.getArtists(this.term).subscribe( artists => {
      console.log('Ready..');
      console.log( artists );
    })
   }


}
