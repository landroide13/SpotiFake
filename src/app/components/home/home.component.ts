import { Component, OnInit } from '@angular/core';
import {SpotiService} from '../../services/spoti.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // 4567e17626064bb380d262862a7dbb94

  // Client Secret c93d5bba8f5e454dbe3a2d6b497be5b8

  constructor(public _spoti : SpotiService ) { }
 
  ngOnInit() {
  }

}
