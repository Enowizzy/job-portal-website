import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: string, stringLimit: number): any {
    // console.log(stringLimit);
    if(value.length > stringLimit) value = value.substring(0,stringLimit);
    return value;
  }

}
