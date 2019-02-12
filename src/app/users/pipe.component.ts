
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterPipe'
  })
  
  export class SomePipe {
  
    transform(value: any, input: string) {
      if (input) {
          input = input.toLowerCase();
          return value.filter(function (el: any) {
              return el.email.toLowerCase().indexOf(input) > -1 ||
                  el.name.toLowerCase().indexOf(input) > -1;
          })
      }
      return value;
  }
  }