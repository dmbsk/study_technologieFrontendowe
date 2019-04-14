import { Pipe, PipeTransform } from '@angular/core';

const MONTHS = ['I', 'II', 'III', 'IV', 'V',
  'VI', 'VII', 'VIII', 'IX', 'X',
  'XI', 'XII'];

@Pipe({
  name: 'specialDate'
})
export class SpecialDatePipe implements PipeTransform {

  date: Date;
  monthNumber: number;
  month: string;

  transform(value: any, args?: any): any {
    this.date = new Date(value);
    this.monthNumber = this.date.getMonth();
    this.month = MONTHS[this.monthNumber];
    console.log(this.month);
    return `${this.date.getDate()} ${this.month} ${this.date.getFullYear()}`
  }
}
