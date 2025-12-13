import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransform',
  pure: false
})
export class DataTransformPipe implements PipeTransform {

  transform(data: any, gender?: any): any {
    if (data && gender) {
      return this.addPrefix(data, gender);
    }
  }
  
  addPrefix(name: any, gender: any): any {
    if (gender == 'male') {
      return `Mr.${name}`
    } else if (gender == 'female') {
      return `Mrs.${name}`
    }
  }

}
