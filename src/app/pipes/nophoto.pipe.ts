import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nophoto'
})
export class NophotoPipe implements PipeTransform {

  

  transform(img : any[] ): any {

    let nomig = 'assets/img/noimage.png';

    if(!img){
      return nomig;
    }
    return (img.length > 0)? img[1].url : nomig;
  }

}
