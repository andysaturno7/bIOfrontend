import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupByProperty',
})
export class GroupByPropertyPipe implements PipeTransform {
  transform(value: any[], key: string): any[] {
    let keyValues = value.reduce((previous, current, index) => {
      let keyValue = current[key];
      previous[keyValue] = previous[keyValue] ?? [];
      previous[keyValue].push(current);
      return previous;
    }, {});

    let res: any[] = [];

    Object.keys(keyValues).map((val) => {
      res.push({ ...keyValues[val][0], count: keyValues[val].length });
    });
    console.log({ value, res });

    return res;
  }
}
