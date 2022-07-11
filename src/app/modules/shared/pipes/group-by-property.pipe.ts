import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByProperty'
})
export class GroupByPropertyPipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    value = [
        {id: 3},
        {id: 4},
        {id: 1},
        {id: 3}
    ]
    let t1:any = {};
    value.forEach((val,idx)=>{
      t1[val[key]] = !t1[val[key]] ? val : val;
      t1[val[key]].count = t1.count + 1 | 0;
    });
    
    let res = Object.keys(t1).map(v=>t1[v]);
    console.log({t1, res, value});
    return []
  }

}
