import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'domsecure'
})
export class DomsecurePipe implements PipeTransform {

  constructor( private domSani : DomSanitizer){}

  transform(value: string, url: string): any {
    return this.domSani.bypassSecurityTrustResourceUrl(url + value);
  }

}
