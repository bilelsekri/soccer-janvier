import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(Tab :any , term:string) {

    if (term === undefined) {
      return Tab;
      }

      return Tab.filter((obj)=> {
        return (obj.teamOne.toLowerCase().includes(term.toLowerCase()) 
        || obj.teamTwo.toLowerCase().includes(term.toLowerCase()));
        })

  }

}
