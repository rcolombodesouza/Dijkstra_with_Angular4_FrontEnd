import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';

@NgModule({})
@Pipe({ name: 'initCaps' })
export class InitCapsPipe implements PipeTransform {
  transform(value: string, args?: any[]) {
    return value.toLowerCase()
      .replace(/(?:^|\s)[a-z]/g, m => m.toUpperCase());
  }
}